export default function Project() {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Project Overview</h1>

      <p style={{ marginBottom: '1rem' }}>
        This application integrates an AI-powered chat system into an existing sales dashboard without altering the main source database. The AI is designed to process prompts based on existing data, ensuring that responses are grounded in the available information. Additionally, there's an option to allow the AI to answer beyond the provided data by setting <code>based_on_data: false</code>, offering flexibility in response generation.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        While I initially considered using Tailwind CSS for styling, I opted for traditional CSS due to version constraints with Next.js. This decision allowed for seamless integration without the need for significant updates or compatibility adjustments.
      </p>

      <p style={{ marginBottom: '1rem' }}>
        The application boasts several key features aimed at enhancing user experience and functionality:
      </p>

      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Sliding Card Component:</strong> A dynamic card interface that allows users to navigate through content seamlessly, providing an interactive and engaging user experience.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Skeleton Loading:</strong> Implementation of skeleton screens to indicate loading states, improving perceived performance and keeping users informed during data retrieval processes.
        </li>
        <li style={{ marginBottom: '0.5rem' }}>
          <strong>Chatbox with Timestamps:</strong> A chat interface that displays timestamps for each message, enabling users to track the timing of conversations effectively.
        </li>
      </ul>

      <p style={{ marginBottom: '1rem' }}>
        Overall, this project demonstrates a thoughtful integration of AI capabilities into an existing system, prioritizing data integrity and user experience without compromising the original database structure.
      </p>
    </div>
  );
}