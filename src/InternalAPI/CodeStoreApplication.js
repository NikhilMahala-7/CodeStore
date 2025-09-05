import { $GetById } from "../PersonalLib/Personallib";

export class CodeStoreApplicationAPI {
    constructor(Id){
        this.Application = $GetById(Id);
    }
}