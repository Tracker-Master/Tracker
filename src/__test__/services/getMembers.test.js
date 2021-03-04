import { getMembers } from "../../services/getMembers";

describe('testing on the getMembers service', () => {

  const ID = 1
  const FULLNAME = 'Name of a user 1'
  const USERNAME = 'username1'

  const member = {
    id: 1,
    fullName: 'Name of a user 1',
    username: 'username1'
  }

  const members = [
    {
      id: 1,
      fullName: 'Name of a user 1',
      username: 'username1'
    },
    {
      id: 2,
      fullName: 'Name of a user 2',
      username: 'username2'
    },
    {
      id: 3,
      fullName: 'Name of a user 3',
      username: 'username3'
    },
    {
      id: 4,
      fullName: 'Name of a user 4',
      username: 'username4'
    },
    {
      id: 5,
      fullName: 'Name of a user 5',
      username: 'username5'
    }
  ]

  beforeEach(() => {
    fetch.resetMocks();
  })

  test('should receive five members with their data with a correct ID given', async () => {
    fetch.mockResponseOnce(JSON.stringify(members))

    const receivedMembers = await getMembers('correct-id')

    expect(receivedMembers.length).toBe(5)
    expect(receivedMembers[0].id).toBe(ID)
    expect(receivedMembers[0].fullName).toBe(FULLNAME)
    expect(receivedMembers[0].username).toBe(USERNAME)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(receivedMembers[0]).toMatchObject(member)
  })

  test('should receive an error with an incorrect ID given', async () => {
    fetch.mockReject(() => new Error())

    const response = await getMembers('invalid-id')

    expect(response).toEqual(Error())
  })

})
