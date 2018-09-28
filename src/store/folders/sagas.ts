import { SagaIterator } from 'redux-saga';
import { call, select, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';
import { bindAsyncAction } from 'typescript-fsa-redux-saga';
import { normalize } from 'normalizr';
import { State, Folder } from 'models';
import * as schema from 'store/schema';
import * as actions from './actions';

const getFolders = (payload: { careReceiverId: number }) =>
  new Promise<Folder[]>(resolve =>
    setTimeout(() => {
      const folders = [
        {
          id: 0,
          careReceiverId: 0,
          name: '病歴やアレルギーなど',
        },
        {
          id: 1,
          careReceiverId: 0,
          name: 'お薬情報',
        },
        {
          id: 2,
          careReceiverId: 1,
          name: '病歴やアレルギーなど',
        },
        {
          id: 3,
          careReceiverId: 1,
          name: 'お薬情報',
        },
      ];

      return resolve(
        folders.filter(
          (folder: Folder) => folder.careReceiverId === payload.careReceiverId
        )
      );
    }, 10)
  );

function* fetchFolders({
  payload,
}: Action<{ careReceiverId: number }>): SagaIterator {
  yield call(
    bindAsyncAction(actions.fetchFolders, { skipStartedAction: true })(
      function*(payload): SagaIterator {
        const folders: Folder[] = yield call(getFolders, payload);
        const normalizedFolders = normalize(folders, [schema.folder]);
        return normalizedFolders;
      }
    ),
    payload
  );
}

function* addFolder({
  payload,
}: Action<{ careReceiverId: number; name: string }>) {
  yield call(
    bindAsyncAction(actions.addFolder, { skipStartedAction: true })(function*(
      payload
    ): SagaIterator {
      const state: { [id: number]: Folder } = yield select(
        ({ folders }: State) => folders
      );
      console.log(state);
      return {
        ...payload,
        id:
          Object.keys(state).reduce(
            (maxId, id) => Math.max(Number(id), maxId),
            -1
          ) + 1,
      };
    }),
    payload
  );
}

export default function* watcher(): SagaIterator {
  yield takeEvery(actions.fetchFolders.started.type, fetchFolders);
  yield takeEvery(actions.addFolder.started.type, addFolder);
}
