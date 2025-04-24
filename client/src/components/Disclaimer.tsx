import '../App.css'

export const Disclaimer = () => {
    const disclaimerText = `
      <div class='disclaimer' >
        <p style="margin-top: 0;">
          <strong>🅸 Disclaimer: This is a learning project and portfolio piece.</strong>
        </p>
        <ul style="margin-bottom: 0; padding-left: 20px;">
          <li>The performance and availability of this application may vary, especially as it is hosted on a free tier service (Render). You might experience delays, particularly after periods of inactivity for your first request.</li>
          <li>This application was created for educational purposes and to showcase development skills.</li>
          <li>It utilizes the Gemini API for translation services.</li>
          <li>The data processed by this application is not stored or used beyond the scope of providing the translation.</li>
          <li>This is not an official Google product and is not affiliated with Google in any way.</li>
        </ul>
      </div>
    `

    return <div dangerouslySetInnerHTML={{ __html: disclaimerText }} />
}