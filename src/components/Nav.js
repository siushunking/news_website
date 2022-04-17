import React from 'react'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">News</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Hot News <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="/Finance">Finance</a>
        <a class="nav-item nav-link" href="/Sport">Sport</a>
        <a class="nav-item nav-link" href="/Entertainment">Entertainment</a>
      </div>
    </div>
  </nav>
  )
}

export default Nav