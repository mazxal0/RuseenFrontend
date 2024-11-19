import { makeAutoObservable } from "mobx";

class SurveyStore {
    page: number = 1;

    constructor() {
        makeAutoObservable(this);
    }

    getPage() {
        return this.page;
    }

    setPage(page: number) {
        this.page = page;
    }
}

const surveyStore = new SurveyStore();
export default surveyStore;