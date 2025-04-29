import '../App.css'

export const Disclaimer = () => {
  const disclaimerText = `
      <div class='disclaimer' >
        <p style="margin-top: 0;">
          <strong>🅸 Disclaimer:</strong>
        </p>
        <ul style="margin-bottom: 0; padding-left: 20px;">
          <li>The first translation might take up to 60 seconds due to the free tier hosting on Render, which puts inactive instances to sleep. Subsequent translations should be much faster.</li>
          <li>This application was created for educational purposes and to showcase development skills.</li>
          <li>It utilizes the Gemini API for translation services.</li>
          <li>The data processed by this application is not stored or used beyond the scope of providing the translation.</li>
          <li>This is not an official Google product and is not affiliated with Google in any way.</li>
        </ul>
      </div>
    `

  return <div dangerouslySetInnerHTML={{ __html: disclaimerText }} />
}