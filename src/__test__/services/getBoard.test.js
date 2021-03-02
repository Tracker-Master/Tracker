import { getBoards } from "../../services/getBoards";

describe('Tests on the getBoard service', () => {

  const correctID = { boardID: 'mpBhV0uD' }
  const incorrectID = { boardID: 'mpppBhV0uD' }

  test('should receive an ID and a name with a correct ID given', async () => {
    const { id, name } = await getBoards(correctID)
    expect(id).toBe('602adb1943612e216e5d4e61')
    expect(name).toBe('Tracker')
  })

  test('should receive an error with an incorrect ID', async () => {
    expect(getBoards(incorrectID)).rejects.toEqual(new Error('Invalid ID'))
  })

})
