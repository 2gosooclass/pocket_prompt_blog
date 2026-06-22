import xml.etree.ElementTree as ET
import urllib.request
import urllib.error

url = "https://2gosooaipromptlab.com/sitemap.xml"
try:
    response = urllib.request.urlopen(url)
    xml_data = response.read()
    root = ET.fromstring(xml_data)
    
    namespaces = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
    urls = [elem.text for elem in root.findall('.//ns:loc', namespaces)]
    
    print(f"Found {len(urls)} URLs in sitemap.")
    error_urls = []
    
    for i, page_url in enumerate(urls):
        try:
            req = urllib.request.Request(page_url, method='HEAD')
            urllib.request.urlopen(req)
        except urllib.error.HTTPError as e:
            print(f"Error {e.code} for {page_url}")
            error_urls.append((page_url, e.code))
        except Exception as e:
            print(f"Error {e} for {page_url}")
            error_urls.append((page_url, str(e)))
            
    if not error_urls:
        print("All URLs returned 200 OK!")
    else:
        print(f"Found {len(error_urls)} broken URLs.")
except Exception as e:
    print(f"Failed to parse sitemap: {e}")
