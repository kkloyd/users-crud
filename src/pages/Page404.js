import { useLocation } from "react-router-dom"

const Page404 = () => {
  let location = useLocation()

  return (
    <div className={`h-screen flex flex-col items-center justify-center`}>
      <b style={title404}>404</b>
      <b style={text404} className="text-4xl">
        Page not found: <code>{location.pathname}</code>
      </b>
    </div>
  )
}

const title404 = {
  fontSize: "30rem",
  lineHeight: 1,
  color: "lightgray",
}

const text404 = {
  lineHeight: 1,
  color: "#555",
}

export default Page404
