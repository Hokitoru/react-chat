import './App.css';

function App() {
  var pusher = new Pusher("2f71376229e26c9aba7c", {
    cluster: "eu",
  });
  var channel = pusher.subscribe("my-channel");

  channel.bind("my-event", (data) => {
    // Method to be dispatched on trigger.
  });

  return (
    <div></div>
  );
}

export default App;
