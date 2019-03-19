require 'uri'
require 'net/http'

url = URI("http://api.msg91.com/api/sendhttp.php?country=91&sender=Default&route=4&mobiles=8660078763,7899193782&authkey=257959A5X9cJy83HNw5c482eec&encrypt=1&message=Hello!%20This%20is%20a%20test&flash=0&unicode=1&schtime="+Time.now.to_s.split('+')[0]+"&afterminutes=0&response=json&campaign=New")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Get.new(url)

response = http.request(request)
puts response.read_body
