package ws.rdd.net;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Map;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.conn.params.ConnRoutePNames;
import org.apache.http.conn.scheme.PlainSocketFactory;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
import org.apache.http.message.BasicHttpResponse;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpParams;
import org.esxx.js.protocol.GAEConnectionManager; 

/**
 * <b>Description:TODO</b>
 * 
 * @author vipup<br>
 *         <br>
 *         <b>Copyright:</b> Copyright (c) 2006-2008 Monster AG <br>
 *         <b>Company:</b> Monster AG <br>
 * 
 * Creation: 08.04.2010::12:07:00<br>
 */
public class UrlFetchTest {
	public String testFetchUrl(String toFetchStr)
			throws ClientProtocolException, IOException {
		HttpResponse respTmp = fetchResp(toFetchStr);
		System.out.println(respTmp);// s.getAllHeaders()
		HttpEntity eTmp = ((BasicHttpResponse) respTmp).getEntity();
		InputStream contentTmp = eTmp.getContent();
		int sizeTmp = Math.max((int) eTmp.getContentLength(), contentTmp
				.available());
		byte buf[] = new byte[sizeTmp];
		int readedTmp = contentTmp.read(buf);
		return new String(buf, 0, readedTmp);
	}

	public HttpResponse fetchResp(String toFetchStr) throws IOException,
			ClientProtocolException {
		return fetchResp(toFetchStr, new String[][] {});
	}

	public HttpResponse fetchResp(String toFetchStr, String headers[][])
			throws IOException, ClientProtocolException {
		HttpClient httpClient = makeHTTPClient();

		String schemes[] = { "https", "http" };
		for (String scheme : schemes) {
			String proxHostTmp = System.getProperty(scheme + ".proxyHost");// System.getProperties();
			String proxyPortTmp = System.getProperty(scheme + ".proxyPort");// System.setProperty("http.proxyHost","localhost");
			if (("" + proxHostTmp + proxyPortTmp).indexOf("null") == -1) {
				org.apache.http.HttpHost proxyTmp = new org.apache.http.HttpHost(
						proxHostTmp, Integer.parseInt(proxyPortTmp), scheme);
				httpClient.getParams().setParameter(
						ConnRoutePNames.DEFAULT_PROXY, proxyTmp);
			}
		}

		String fetchUrl = null == toFetchStr ? "http://www.fiducia.de/service/suchergebnis.html?searchTerm=java"
				: toFetchStr;
		HttpUriRequest m = new HttpGet(fetchUrl);
		for (String[] nextHeader : headers)
			m.addHeader(nextHeader[0], nextHeader[1]);
		HttpResponse respTmp = httpClient.execute(m);
		if (respTmp.getStatusLine().toString().indexOf("200 OK") > 0) {
			System.out.println("resp.:" + respTmp.getStatusLine());
		} else {
			m.addHeader("Authorization", "Basic "
					+ new String(Base64Coder.encode(("iboserviceuser" + ":"
							+ "iboserviceuser").getBytes())));
			respTmp = httpClient.execute(m);
		}
		return respTmp;
	}

	public HttpClient makeHTTPClient() {
		HttpParams httpParams = new BasicHttpParams();

		org.apache.http.conn.ClientConnectionManager connectionManager = null;
		// ?new RrdGraphCmd():new RrdSvgCmd();
		if (! isGAE()) {
			SchemeRegistry schreg = new SchemeRegistry();
			schreg.register(new Scheme("http", PlainSocketFactory
					.getSocketFactory(), 80));
			schreg.register(new Scheme("https", SSLSocketFactory
					.getSocketFactory(), 443));
			connectionManager = new ThreadSafeClientConnManager(httpParams,
					schreg);
		} else {
			connectionManager = new GAEConnectionManager();
		}
		HttpClient httpClient = new DefaultHttpClient(connectionManager,
				httpParams);
		return httpClient;
	}
	
	public static final boolean isGAE = "null".equals(  ""+ System.getProperty("com.google.appengine.runtime.version") );

	private boolean isGAE() {
		
		return isGAE; 
	}

	public HttpResponse fetchResp(String toFetchStr, String[][] headers,
			Map parameterMap) throws ClientProtocolException, IOException {
		HttpClient httpClient = makeHTTPClient();
		String schemes[] = { "https", "http", "ftp" };
		for (String scheme : schemes) {
			String proxHostTmp = System.getProperty(scheme + ".proxyHost");// System.getProperties();
			String proxyPortTmp = System.getProperty(scheme + ".proxyPort");// System.setProperty("http.proxyHost","localhost");
			if (("" + proxHostTmp + proxyPortTmp).indexOf("null") == -1) {
				org.apache.http.HttpHost proxyTmp = new org.apache.http.HttpHost(
						proxHostTmp, Integer.parseInt(proxyPortTmp), scheme);
				httpClient.getParams().setParameter(
						ConnRoutePNames.DEFAULT_PROXY, proxyTmp);
			}
		}

		String fetchUrl = null == toFetchStr ? "http://www.fiducia.de/service/suchergebnis.html?searchTerm=java"
				: toFetchStr;
		HttpUriRequest m = new HttpPost(fetchUrl);
		for (String[] nextHeader : headers)
			m.addHeader(nextHeader[0], nextHeader[1]);
		for (Object nextParName : parameterMap.keySet()) {
			String valueTmp = ""
					+ (((String[]) parameterMap.get(nextParName))[0]);
			HttpParams arg0 = httpClient.getParams();
			m.setParams(arg0.setParameter("" + nextParName, valueTmp));
		}
		HttpResponse respTmp = httpClient.execute(m);
		if (respTmp.getStatusLine().toString().indexOf("200 OK") > 0) {
			System.out.println("resp.:" + respTmp.getStatusLine());
		} else {
			m.addHeader("Authorization", "Basic "
					+ new String(Base64Coder.encode(("iboserviceuser" + ":"
							+ "iboserviceuser").getBytes())));
			respTmp = httpClient.execute(m);
		}
		return respTmp;
	}

	public String[] googleSearch(String tosearchPar) throws IOException {
		return toArray (googleSearchAsJSON( tosearchPar ));
	}
	private String[] toArray(String strJSON) {
        String [] myList = strJSON.split(",");
        ArrayList<String>  listTmp = new ArrayList<String> ();
        for(int i=0;i<myList.length ;i++){
             if (myList[i].startsWith("\"title\":")){
            	String str2Add = myList[i].substring("\"title\":\"".length());
            	str2Add  = new String(str2Add.getBytes(  )  );
            	str2Add = stringEncode.ascii2native(str2Add);
				listTmp.add(str2Add);
             }
        }
		return listTmp.toArray(new String[]{});
	}

	public String  googleSearchAsJSON(String tosearchPar) throws IOException {
		String encodedTmp =URLEncoder.encode(tosearchPar);
		encodedTmp = "http://ajax.googleapis.com/ajax/services/search/web?v=1.0&q=" 
			+ encodedTmp 
			+ "&key=ABQIAAAAoDKI2F7UsirQOzBhhAUkhBTomuZdHNjezBT_SZngHAjFst_mbhRQK01NDRuXvGPZs9LeXpiZSFwvHw";
		URL url = new URL(encodedTmp  );
		HttpURLConnection connection = (HttpURLConnection) url.openConnection();
		connection.setRequestProperty("Referrer", "http://youkod.appspot.com/");
		connection.setRequestProperty("Referer Page", "http://youkod.appspot.com/");
		connection.connect();
		
		java.io.BufferedReader reader = new java.io.BufferedReader(
				new java.io.InputStreamReader(connection.getInputStream()));
		String line;
		StringBuffer dataTmp = new StringBuffer();
		while ((line = reader.readLine()) != null) {
			dataTmp.append(line);
		}
		reader.close();
		System.out.println(""+(""+dataTmp).length() + dataTmp);
		return ""+dataTmp;
	}

}
