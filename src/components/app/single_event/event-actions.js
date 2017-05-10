export const EVENT_CHOOSEN = 'EVENT_CHOOSEN';


// helt fel, anv'nds inte
export function eventChoosen(id) {
  return {
    type: EVENT_CHOOSEN,
    id: id,
  };
}
