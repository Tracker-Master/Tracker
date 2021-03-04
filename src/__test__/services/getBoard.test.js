import { getBoards } from "../../services/getBoards";

describe('testing on the getBoard service', () => {

  beforeEach(() => {
    fetch.resetMocks();
  })

  test('should receive an ID and a name with a correct ID given', async () => {
    fetch.mockResponseOnce(JSON.stringify({ id: 1, name: 'Tracker' }))

    const { id, name } = await getBoards({ boardID: 'board-id' })

    expect(id).toBe(1)
    expect(name).toBe('Tracker')
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test('should receive an error with an incorrect ID', async () => {
    fetch.mockReject(() => new Error('Invalid ID'))

    const response = await getBoards({ boardID: 'incorrect-board-id' })

    expect(response).toEqual(Error('Invalid ID'))
  })

})
