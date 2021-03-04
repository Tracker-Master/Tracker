import { getCards } from "../../services/getCards";

describe('testing on the getCards service', () => {

  const description = 'this is a description'
  const name = 'this is a name'
  const shortUrl = 'this is a short url'

  const oneCard = {
    id: 1,
    desc: 'this is a description',
    name: 'this is a name',
    shortUrl: 'this is a short url'
  }

  const cards = [
    {
      id: 1,
      desc: 'this is a description',
      name: 'this is a name',
      shortUrl: 'this is a short url'
    },
    {
      id: 2,
      desc: 'This is a description',
      name: 'this is a name',
      shortUrl: 'this is a short url'
    },
    {
      id: 3,
      desc: 'This is a description',
      name: 'this is a name',
      shortUrl: 'this is a short url'
    },
  ]

  beforeEach(() => {
    fetch.resetMocks();
  })


  test('should receive 3 cards and a name, description, short url and an ID with a correct ID given', async () => {
    fetch.mockResponseOnce(JSON.stringify(cards))
    const receivedCards = await getCards({ boardID: 'board-id' })
    expect(receivedCards.length).toBe(3)
    expect(receivedCards[0].id).toBe(1)
    expect(receivedCards[0].name).toBe(name)
    expect(receivedCards[0].desc).toBe(description)
    expect(receivedCards[0].shortUrl).toBe(shortUrl)
    expect(receivedCards[0]).toMatchObject(oneCard)
  })

  test('should receive an error with an incorrect ID given', async () => {
    fetch.mockReject(() => new Error())

    const response = await getCards('invalid-id')

    expect(response).toEqual(Error())
  })

})
