export const onSendMessage = /* GraphQL */ `
  subscription OnSendMessage {
    onSendMessage {
      id
      content
      sender
      createdAt
    }
  }
`;
