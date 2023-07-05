import { TOKEN } from '@env';
import axios, { AxiosInstance } from 'axios';
import ChapterDTO from './../data-transports/ChapterDTO';
import VerseDTO from './../data-transports/VerseDTO';
import VersionDTO from './../data-transports/VersionDTO';

class BibleService {
  private _http: AxiosInstance;

  constructor() {
    this._http = axios.create({
      baseURL: 'https://www.abibliadigital.com.br/api'
    });

    this._http.interceptors.request.use((value) => {
      value.headers.Authorization = `Bearer ${TOKEN}`;
      return Promise.resolve(value);
    });
  }

  async retrieveVersesByChapter(translationAbbreviation: string, bookAbbreviation: string, chapter: number): Promise<VerseDTO[]> {
    const response = await this._http.get(`/verses/${translationAbbreviation}/${bookAbbreviation}/${chapter}`);
    const { verses } = response.data as ChapterDTO;
    return verses;
  }

  async retrieveValidTranslationsAbbreviations(): Promise<VersionDTO[]> {
    const response = await this._http.get('/versions');
    return response.data;
  }
}

export default BibleService;