const initialState = {
  events: [
    {
      id: '1',
      title: "Tyngdlyftning av luft",
      location_name: "Rålambshovsparkens utegym",
      geographical_position: {
        X: 6587056,
        Y: 1619460,
      },
    },
    {
      id: '2',
      title: "Jaga flugor",
      location_name: "Sveriges riksdag",
      geographical_position: {
        X: 6587056,
        Y: 1619460,
      },
    },
    {
      id: '3',
      title: "Benpass deluxe",
      location_name: "Gärdets utegym",
      geographical_position: {
        X: 6587056,
        Y: 1619460,
      },
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
  case 'EVENT_SELECTED':
    return action.payload;
  }

  return state;
}