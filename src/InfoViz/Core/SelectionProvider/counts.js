// ----------------------------------------------------------------------------
// count
// ----------------------------------------------------------------------------
//
// ===> SET
//
//  const payload = {
//    type: 'count',
//    data: {
//       annotationInfo: {
//         annotationGeneration: 1,
//         selectionGeneration: 1,
//       },
//       count: 20,
//       role: {
//         selected: true,
//         score: 0,
//       },
//    },
//  }
//
// ===> GET
//
//  const query = {
//    type: 'count',
//  }
//
// const response = [
//   {
//   },
// ];
//
// ===> NOTIFICATION
//
// request = {
//   type: 'count',
//   variables: [],
//   metadata: {},
// }
//
// const notification = {
// };
//
// ----------------------------------------------------------------------------

export function set(model, payload) {
  model.count = payload;
}

// ----------------------------------------------------------------------------

function get(model, query) {
  return model.count;
}

// ----------------------------------------------------------------------------

function getNotificationData(model, request) {
  return get(model);
}

// ----------------------------------------------------------------------------

export default {
  set,
  get,
  getNotificationData,
};
