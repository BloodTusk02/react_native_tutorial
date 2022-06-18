import axios from 'axios'

export class AxiosClient {
    _client;

    constructor(){
        this._client = axios.create({
            baseURL: 'https://profi-ar.herokuapp.com',
            timeout: 3000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        this.useLogging();
        this.useAuth();
    }

    useLogging() {
        this._client.interceptors.request.use(
            (config) => {
                console.log(`Отправлен запрос на маршрут ${config.url}:`, config);
                return config;
            },
            (error) => {
                console.log('Ошибка при формировании запроса');
                return Promise.reject(error);
            }
        );
        this._client.interceptors.response.use(
            (response) => {
                console.log(`Пришёл ответ от ${response.config.url}. Код ${response.status}: `, response.data);
                return response;
            },
            (error) => {
                console.log(`При отправке запроса произошла ошибка. Код: ${error.response.status}:`, error.response);
            }
        )
    }

    useAuth() {
        this._client.interceptors.response.use(
            // Если всё хорошо - продолжаем
            (config) => {
                return config;
            },
            // Если ошибка - 401 - авторизовываемся 
            this.authorizeRequest
        );
    }

    authorizeRequest(error) {
        if (error.response.status === 401) {
            /*
            Пробуем получить токен из async storage
            Если получили - добавляем заголовок и повторяем запрос
            */    
            const token = '' // Брать из async storage
            // Проверяем на существование
            if (token){
                this._client.headers.common['Authorization'] = `Bearer ${token}`;
            }

            // Перенаправляем пользователя на страницу входа
        }
        else {
            return Promise.reject(error);
        }
    }

    setParams(params) {
        this._client.defaults.params = params;
        return this;
    }    

    setMethod(method) {
        this._client.defaults.method = method;
        return this;
    }

    /**
     * 
     * @param {} options: {body, response, error}
     */
    sendRequest(options){
        this._client.request({
            url: options.url,
            data: options.body ?? null
        })
            .then(options.response)
            .catch(options.error);
    }
}