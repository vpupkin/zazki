<%@page import="com.google.appengine.api.users.User"%>
<%@page import="com.google.appengine.api.users.UserServiceFactory"%>
<%@page import="com.google.appengine.api.users.UserService"%>
hehe
<%
        UserService userService = UserServiceFactory.getUserService();
        User user = userService.getCurrentUser();

        if (user != null) {
            response.setContentType("text/plain");
           %>"Hello, <%=user.getNickname()%> ! <% 
        } else { 
        	response.sendRedirect(userService.createLoginURL(request.getRequestURI()));
        }
%>        