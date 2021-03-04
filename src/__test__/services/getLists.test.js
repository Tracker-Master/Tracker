import { getLists } from "../../services/getLists";

describe('Tests on the getLists service', () => {

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
  })

})
