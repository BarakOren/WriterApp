export const selectCategory = category => ({
    type: "SELECT_CATEGORY",
    payload: category
});

export const selectPressure = pressure => ({
    type: "SELECT_PRESSURE",
    payload: pressure
});

export const selectBackground = id => ({
    type: "SELECT_BACKGROUND",
    payload: id
});

export const selectOutline = id => ({
    type: "SELECT_OUTLINE",
    payload: id
});

export const selectHighlights = id => ({
    type: "SELECT_HIGHLIGHTS",
    payload: id
});

export const selectPowerLine = id => ({
    type: "SELECT_POWERLINE",
    payload: id
});

export const selectFill = id => ({
    type: "SELECT_FILL",
    payload: id
});

export const saveScheme = scheme => ({
    type: "SAVE_SCHEME",
    payload: scheme
})

export const removeScheme = scheme => ({
    type: "REMOVE_SCHEME",
    payload: scheme
})