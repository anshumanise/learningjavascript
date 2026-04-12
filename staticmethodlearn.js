function main() {
  class Message {
    // Instance variables
    constructor(sender, receiver, messageContent) {
      this.sender = sender;
      this.receiver = receiver;
      this.messageContent = messageContent;
    }

    // Static Variables
    static status = "offline";
    static totalMessages = 0;

    // Static method to change the status
    static changeStatus(newStatus) {
      Message.status = newStatus;
      console.log(`The status has been changed to ${newStatus}`);
    }

    // Static method to record a message
    static recordMessage() {
      Message.totalMessages++;
    }

    // Instance method to display details
    displayDetails() {
      console.log(`Sender: ${this.sender}`);
      console.log(`Receiver: ${this.receiver}`);
      console.log(`Message: ${this.messageContent}`);
      console.log(`Status: ${Message.status}`);
      console.log(`Total Messages: ${Message.totalMessages}`);
    }
  }

  return Message;
}

// Get the Message class
const Message = main();

// Expected Input
Message.changeStatus("online");
Message.recordMessage();
const myMessage = new Message("John", "Jane", "Hello");
myMessage.displayDetails();

// Expected Output:
// The status has been changed to online
// Sender: John
// Receiver: Jane
// Message: Hello
// Status: online
// Total Messages: 1