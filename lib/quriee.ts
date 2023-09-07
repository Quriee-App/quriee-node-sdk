import { Axios } from "axios";

export class Quriee {
    private readonly http: Axios;
    constructor(private readonly apiKey: string) {
        this.http = new Axios({
            baseURL: 'https://api.quriee.com/api/v1',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
    }
}