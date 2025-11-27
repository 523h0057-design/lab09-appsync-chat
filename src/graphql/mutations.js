export const sendMessage = /* GraphQL */ `
  mutation SendMessage($content: String!, $sender: String!) {
    sendMessage(content: $content, sender: $sender) {
      id
      content
      sender
      createdAt
    }
  }
`;
