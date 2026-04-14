```mermaid
sequenceDiagram
    participant browser
    participant server

    Note over browser:  When the button on the form is clicked, js uses e.preventDefault() to stop the browser from doing the default behaviour.
    Note over browser: js creates new object {   content: "...",  date: "..."}
    Note over browser: js updates the notes using DOM manipulation 
    Note over browser: UI updates immediately without waiting for server response
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Data is sent as JSON
    activate server
    Note right of server: Server saves the new note
    server-->>browser: response with status code 201 Created  
    deactivate server
    Note over browser: No page reload or additional requests as DOM's already been updated by js