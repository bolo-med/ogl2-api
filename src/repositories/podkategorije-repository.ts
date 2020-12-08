import { getManager } from "typeorm";
import { Podkategorija } from "../models/podkategorija";

export class PodkategorijeRepository {

    getAllPodkategorija = () => {
        return getManager().getRepository(Podkategorija).find();
    };

    getPodkategorijaBuId = (id: number) => {
        return getManager().getRepository(Podkategorija).findOne(id);
    };

    insertpodkategorija = (podkategorija: Podkategorija) => {
        return getManager().getRepository(Podkategorija).insert(podkategorija);
    };

    updatePodkategorija = (podkategorija: Podkategorija) => {
        return getManager().getRepository(Podkategorija).save(podkategorija);
    };

    deletePodkategorija = (id: number) => {
        return getManager().getRepository(Podkategorija).delete(id);
    };

}

