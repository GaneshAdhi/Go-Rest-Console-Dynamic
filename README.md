# 🖥️ GoRest API Console (Frontend)

A browser-based console to explore the GoRest public REST API. Browse users, posts, todos; filter and paginate; and try create/update/delete calls by providing a Bearer token.

Live Preview: https://ramrestconsdy.ccbp.tech/

## ✨ Features
- Resource selector: Users, Posts, Todos
- Query params: page, per_page, search (q)
- One-click GET calls to list and detail endpoints
- Detail fetch by ID
- Create, Update (PATCH), Delete with JSON body
- Raw Request/Response viewer with status code
- Optional Bearer token input (stored in session only)
- Copy-to-clipboard helpers
- Clean Bootstrap 5 UI with dark result pane

## 🔧 Tech
- HTML5
- CSS3 + Bootstrap 5
- Vanilla JavaScript (fetch API)

## ▶️ How to Run
1. Download files.
2. Open `index.html` in a modern browser (HTTPS recommended).
3. Optional: Paste your GoRest personal access token in the “Bearer Token” field for write calls.
4. Choose a resource, set query params, and click “GET List” or “GET by ID”. For write calls, fill JSON body and click Create/Update/Delete.

## 🔐 Authentication
- Read operations (GET): no token required.
- Write operations (POST/PATCH/DELETE): add `Authorization: Bearer <token>`.
- Token is never persisted to disk; it’s only kept in-memory while page is open.

## 🔗 Default Endpoints
- Base: `https://gorest.co.in/public-api/users`
- Users: `/users`
- Posts: `/posts`
- Todos: `/todos`
- Common list query: `?page=1&per_page=20`
- Pagination max results per page is 100.

Reference: GoRest public endpoints and pagination examples[11].

## ⚠️ Notes
- 422 responses indicate validation errors on write; inspect response JSON to see which fields are missing or invalid (common when creating users without required fields)[16].
- Add `Content-Type: application/json` for bodies.
- Use HTTPS and valid Authorization header syntax: `Authorization: Bearer <token>`[12][15].


