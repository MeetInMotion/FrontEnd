export const LOADING_CATEGORIES = 'LOADING_CATEGORIES';
function loadingCategories() {
  return {
    type: LOADING_CATEGORIES,
    loading: true,
  };
}

export const LOADING_CATEGORIES_SUCCEEDED = 'LOADING_CATEGORIES_SUCCEEDED';
function loadingCategoriesSucceeded(categoriesList) {
  return {
    type: LOADING_CATEGORIES_SUCCEEDED,
    categoriesList: categoriesList,
    loading: true,
    isError: false,
  };
}

export const LOADING_CATEGORIES_FAILED = 'LOADING_CATEGORIES_FAILED';
function loadingCategoriesFailed(error) {
  return {
    type: LOADING_CATEGORIES_FAILED,
    isError: false,
    error: error,
  };
}

export function loadCategories() {
  return function(dispatch) {
    dispatch(loadingCategories());

    setTimeout(function() {
      const categoriesList = [
        {
          DefinitiveName: 'Motionsspåret',
          Id: 'a4116a6a-af53-4672-b492-01d7adeae987',
          PluralName: 'Motionsspår',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Motionsspår',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1452256579573+0100)/',
        },
        {
          DefinitiveName: 'Sportfältet',
          Id: 'b21124af-65ab-48fb-a9c9-2a31a125ff5c',
          PluralName: 'Sportfält',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Sportfält',
          TimeCreated: '/Date(1317294030273+0200)/',
          TimeUpdated: '/Date(1452255900437+0100)/',
        },
        {
          DefinitiveName: 'Simhallen',
          Id: '10031f76-001a-4a00-9e2a-3b1a166ebf6f',
          PluralName: 'Simhallar',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Simhall',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1437033633980+0200)/',
        },
        {
          DefinitiveName: 'Idrottshallen',
          Id: '97ac5970-6dc0-47b5-a049-482082827c1f',
          PluralName: 'Idrottshallar',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Idrottshall',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1437033381190+0200)/',
        },
        {
          DefinitiveName: 'Utegym',
          Id: '96a67da3-938b-487e-ac34-49b155cb277b',
          PluralName: 'Utegym',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Utegym',
          TimeCreated: '/Date(1301571254527+0200)/',
          TimeUpdated: '/Date(1452255406627+0100)/',
        },
        {
          DefinitiveName: 'Idrottsplatsen',
          Id: 'cf6ed350-3670-4f34-916b-4a4005f5db76',
          PluralName: 'Idrottsplatser',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Idrottsplats',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1436966827997+0200)/',
        },
        {
          DefinitiveName: 'Ridskolan',
          Id: 'b19d7b1b-eebe-4a05-aaf7-5623439cbd8e',
          PluralName: 'Ridskolor',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Ridskola',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1436966982170+0200)/',
        },
        {
          DefinitiveName: 'Skateparken och parkouren',
          Id: '4273b90c-0f90-47ee-91c3-5db5c9baf0c1',
          PluralName: 'Skateparker och parkour',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Skatepark och parkour',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1452241900200+0100)/',
        },
        {
          DefinitiveName: 'Frisbeegolfbanan',
          Id: '738b2fa2-f99f-4937-a279-7279c777ec32',
          PluralName: 'Frisbeegolfbanor',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Frisbeegolfbana',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1297246500667+0100)/',
        },
        {
          DefinitiveName: 'Bollplanen',
          Id: 'a05cd75b-c974-4890-9a7d-abc790997cf1',
          PluralName: 'Bollplaner',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Bollplan',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1436961396747+0200)/',
        },
        {
          DefinitiveName: 'Isbanan',
          Id: '92c11430-378e-45f5-9648-bfdbe4848887',
          PluralName: 'Isbanor',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Isbana',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1452255855503+0100)/',
        },
        {
          DefinitiveName: 'Skidåkningen',
          Id: '5b5cb6c2-329a-4678-9499-ee6ffa88c0bc',
          PluralName: 'Skidåkning',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Skidåkning',
          TimeCreated: '/Date(1353675001020+0100)/',
          TimeUpdated: '/Date(1452255969130+0100)/',
        },
        {
          DefinitiveName: 'Vinterfotbollsplanen',
          Id: 'fcc0db7f-065e-43f9-94f0-fb7c4467ffde',
          PluralName: 'Vinterfotbollsplaner',
          ServiceUnitTypeGroupInfo: {
            Id: 3,
            Name: 'Idrott/Motion',
          },
          SingularName: 'Vinterfotbollsplan',
          TimeCreated: '/Date(1231320218217+0100)/',
          TimeUpdated: '/Date(1436968564223+0200)/',
        },
      ];
      dispatch(loadingCategoriesSucceeded(categoriesList));
    }, 1000);
    let isError = false;
    if (isError) {
      dispatch(loadingCategoriesFailed('error message'));
    }
  };
}
