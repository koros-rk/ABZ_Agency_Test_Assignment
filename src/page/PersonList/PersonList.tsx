import React, {useCallback, useEffect, useMemo} from 'react';
import './PersonList.scss';
import classNames from 'classnames';
import { Card } from '../../components/Card/Card';
import { Button } from '../../shared/Button/Button';
import { Preloader } from '../../shared/Preloader/Preloader';
import {useAppDispatch, useAppSelector} from "../../api/store/hooks";
import {UserSelector} from "../../api/store/slices/users/User.slice";
import {getUsers} from "../../api/store/slices/users/AsyncActions/get";
import {ActionState} from "../../api/store/types/ActionState";

export const PersonList: React.FC = () => {
  const { users, statuses, next_page, current_page, on_page, total_pages } = useAppSelector(UserSelector);
  const dispatch = useAppDispatch();
  const hasNext = useMemo(() => {
    return current_page < total_pages;
  }, [current_page, total_pages]);

  const loadNext = useCallback((page = current_page, count = on_page) => {
    dispatch(getUsers({ page, count }));
  }, [next_page, on_page]);

  useEffect(() => {
    loadNext();
  }, []);

  return (
    <section className="list" id="personList">
      <h2 className="list_item list_item--title">Working with GET request</h2>
      <div className="list_item list_item--container">
        {users && (users?.map(user => (<Card user={user} key={`${user.id}-${user.email}`} />)))}
        {statuses.getStatus === ActionState.Loading && (<Preloader className="list_item" />)}
      </div>
      <Button
        type="anchor"
        size="lg"
        className={classNames('list_item list_item--button', {
          'list_item--button--hidden': !hasNext,
        })}
        onClick={() => loadNext(next_page, on_page)}
        disabled={!hasNext}
      >
        Show more
      </Button>
    </section>
  );
};
