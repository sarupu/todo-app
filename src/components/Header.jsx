export function Header() {
  return (
    <div className="header">
      <h1>todo</h1>
      <div className="btn-group">
        <button className="btn">All</button>
        <button className="btn">Active</button>
        <button className="btn">Completed</button>
      </div>
    </div>
  )
}
