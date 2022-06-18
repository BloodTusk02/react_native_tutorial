export class ApiClient {
    _baseUrl = "https://profi-ar.herokuapp.com";
    _url;
    _query = '';
    _method = 'GET';
    _headers;
    _body = {};
    _isBodySet = false;

    

    constructor() {
        this._headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }        
    }

    setUrl(url){
        this._url = this._baseUrl + url;
        return this;
    }

    setMethod(method) {
        this._method = method;
        return this;
    }

    authenticate(token) {
        if (this.headers.token){
            throw new Error('Токен уже установлен');
        }
        
        this.headers = {
            ...headers,
            'Authorization': `Bearer ${token}`
        };
        return this;
    }
    
    setBody(body) {
        this._body = body;
        this._isBodySet = true;
        return this;
    }

    /**
     * 
     * @param query [{ name:'param', value:'value' }]
     * @returns { ApiClient }
     */
    setQueryParams(query) {
        this._query = '?'
        query.forEach(el => {
            this._query += `${el.name}=${el.value}`
        });
        return this;
    }

    async sendAsync() {
        let options = {
            method: this._method,
            headers: this._headers,
        }
        if (this._isBodySet) [
            options = {
                ...options,
                body: JSON.stringify(this._body)
            }
        ]
        const response = await fetch(this._url + this._query, options);
        const json = await response.json();
        if (!response.ok){
            throw new Error(json.message);
        }
        return json;
    }

    async trySendAsync(handlers) {
        try {
            console.log(`Отправлен запрос на маршрут '${this._url}':`, this.getRequestObject());
            const response = await this.sendAsync();
            console.log('Запрос выполнен успешно:', {
                status: 'Success',
                response: response
            });
            handlers.res(response);
        } 
        catch(error){
            console.error('При  выполении запроса произошла ошибка:', {
                status: 'Error',
                response: error.message
            });

            if (handlers.err){
                handlers.err(error);
            }
        }
    }

    getRequestObject() {
        return {
            method: this._method,
            headers: this._headers,
            query: this._query,
            body: this._isBodySet ? this._body : null
        }
    }
}