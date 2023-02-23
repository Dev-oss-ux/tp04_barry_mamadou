import { Injectable } from '@angular/core';
import {
    Action,
    Selector,
    State,
    StateContext,
    createSelector,
} from '@ngxs/store';
import { AddMushroom, DelMushroom } from '../model/store';
import { StoreStateModel } from './store-state-model';


@State<StoreStateModel>({
    name: 'mushrooms',
    defaults: {
        mushrooms: [],
    },
})
@Injectable()
export class StoreState {
    @Selector()
    static getNbMushrooms(state: StoreStateModel) {
        return state.mushrooms.length;
    }

    // static getNbMushroomsFavorite(fav: boolean) {
    //     return createSelector([StoreState], (state: StoreStateModel) => {
    //         return state.mushrooms.filter((c) => c.favorite == fav).length;
    //     });
    // }

    @Selector()
    static getListMushrooms(state: StoreStateModel) {
        return state.mushrooms;
    }

    @Action(AddMushroom)
    add(
        { getState, patchState }: StateContext<StoreStateModel>,
        { payload }: AddMushroom
    ) {
        const state = getState();
        patchState(
            // Add the new mushroom to the list or increment the quantity if it already exists
            {
                mushrooms: state.mushrooms.find((x) => x.id == payload.id)
                    ? state.mushrooms.map((m) =>
                        m.id == payload.id
                            ? { ...m, quantity: m.quantity + 1 }
                            : m
                    )
                    : [...state.mushrooms, { ...payload, quantity: 1 }],
            }
        )
    }

    @Action(DelMushroom)
    del(
        { getState, patchState }: StateContext<StoreStateModel>,
        { payload }: DelMushroom
    ) {
        const state = getState();
        patchState({
            //delete product if quantity is 1 or decrement quantity
            mushrooms: state.mushrooms.find((t) => t.id === payload.id).quantity === 1
                ? state.mushrooms.filter((t) => t.id !== payload.id) //delete product
                : state.mushrooms.map((m) =>  //decrement quantity
                m.id == payload.id 
                    ? { ...m, quantity: m.quantity - 1 } //decrement quantity
                    : m //keep product
            )
        });







    }
}
