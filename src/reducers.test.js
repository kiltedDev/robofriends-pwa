import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

import * as reducers from './reducers';

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the inital state', () => {
    expect( reducers.searchRobots( undefined, {})).toEqual( initialStateSearch )
  })

  it('should handle the CHANGE_SEARCHFIELD event', () => {
    expect( reducers.searchRobots( initialStateSearch, {
      type: CHANGE_SEARCHFIELD,
      payload: 'abc'
    })).toEqual({ searchField: 'abc' })
  })
})

describe('requestRobots', () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  }

  const bob = {
    name: 'bob',
    email: 'bob@bob.net',
    id: 1
  }

  it('should return the initial state', () => {
    expect( reducers.requestRobots( undefined, {} )).toEqual( initialStateRobots )
  })

  it('should handle the REQUEST_ROBOTS_PENDING event', () => {
    expect( reducers.requestRobots( initialStateRobots, {
      type: REQUEST_ROBOTS_PENDING
    }).isPending).toEqual( true )
  })

  it('should handle the REQUEST_ROBOTS_SUCCESS event', () => {
    expect( reducers.requestRobots( initialStateRobots, {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: [ bob ]
    })).toEqual({ robots: [ bob ], isPending: false })
  })

  it('should handle the REQUEST_ROBOTS_FAILED event', () => {
    expect( reducers.requestRobots( initialStateRobots, {
      type: REQUEST_ROBOTS_FAILED,
      payload: 'Curses! Foiled again!'
    })).toEqual({
      error: 'Curses! Foiled again!',
      robots: [],
      isPending: false
    })
  })
})
