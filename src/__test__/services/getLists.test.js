import { getLists } from "../../services/getLists";

describe('testing on the getLists service', () => {

  const list = {
    id: 1,
    name: 'To do'
  }

  const lists = [
    {
      id: 1,
      name: 'To do'
    },
    {
      id: 2,
      name: 'Doing'
    },
    {
      id: 3,
      name: 'Done'
    },
  ]

  beforeEach(() => {
    fetch.resetMocks();
  })

  test('should return 3 lists and its names with a correct ID given', async () => {
    fetch.mockResponseOnce(JSON.stringify(lists))

    const receivedLists = await getLists('correct-id')

    expect(receivedLists.length).toBe(3)
    expect(receivedLists[0].id).toBe(1)
    expect(receivedLists[0].name).toBe('To do')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(receivedLists[0]).toMatchObject(list)
  })

  test('should receive an error with an incorrect ID given', async () => {
    fetch.mockReject(() => new Error())

    const response = await getLists('incorrect-id')

    expect(response).toEqual(Error())
  })

})
