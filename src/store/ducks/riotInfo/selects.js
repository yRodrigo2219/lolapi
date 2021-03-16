export const selectPatchVersion = state => (
  state.riotInfo.patch
)

export const selectIsLoading = state => (
  state.riotInfo.loading
)

export const selectKeystonePath = (style, id) => (
  state => {
    if (style === -1 || id === -1 || state.riotInfo.runes.length === 0)
      return '';

    const runes = state.riotInfo.runes;
    const keys = runes.find(fam => (
      fam.id === style
    )).slots[0].runes;
    const keystone = keys.find(key => (
      key.id === id
    ));

    return keystone.icon;
  }
)

export const selectSubstylePath = (style) => (
  state => {
    if (style === -1 || state.riotInfo.runes.length === 0)
      return '';

    const runes = state.riotInfo.runes;
    const path = runes.find(fam => (
      fam.id === style
    )).icon;

    return path;
  }
)