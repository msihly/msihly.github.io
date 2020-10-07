import * as types from "./types";

/******************** MENUS ********************/
export const externalClick = () => ({
    type: types.EXTERNAL_CLICK,
    payload: {}
});

export const menuClosed = (id, parent = "") => ({
    type: types.MENU_CLOSED,
    payload: { id, parent }
});

export const menuOpened = (id, parent = "") => ({
    type: types.MENU_OPENED,
    payload: { id, parent }
});

/******************** MODALS ********************/
export const modalClosed = (id) => ({
    type: types.MODAL_CLOSED,
    payload: { id }
});

export const modalOpened = (id) => ({
    type: types.MODAL_OPENED,
    payload: { id }
});

/******************** INPUTS ********************/
export const inputCreated = (id, value) => ({
    type: types.INPUT_CREATED,
    payload: { id, value }
});

export const inputDeleted = (id) => ({
    type: types.INPUT_DELETED,
    payload: { id }
});

export const inputUpdated = (id, value) => ({
    type: types.INPUT_UPDATED,
    payload: { id, value }
});