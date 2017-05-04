export const EVENT_CHOOSEN = 'EVENT_CHOOSEN';

export function eventChoosen(id) {
  return {
    type: EVENT_CHOOSEN,
    id: id,
  };
}
