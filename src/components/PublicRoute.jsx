const PublicRoute = ({ children }) => {
  return 1 === 1 ? children : <Navigate to="/" replace />;
};

export default PublicRoute;
