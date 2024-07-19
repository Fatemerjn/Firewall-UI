from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from time import sleep


driver = webdriver.Firefox()

driver.get("http://localhost:3000/network/interfaces")

sleep(1)

add1 = driver.find_element(By.XPATH, "//button[contains(text(), 'New')]")
add1.click()

sleep(1)

name_feild = driver.find_element(By.XPATH, "//input[@placeholder='Name']")
name_feild.send_keys("Intf Test")

type_feild = driver.find_element(By.XPATH, "//input[@placeholder='Type']")
type_feild.send_keys("Type Test")

member_feild = driver.find_element(By.XPATH, "//input[@placeholder='Member']")
member_feild.send_keys("Member Test")

ipn_feild = driver.find_element(By.XPATH, "//input[@placeholder='IP/Netmask']")
ipn_feild.send_keys("ipn Test")

tansc_feild = driver.find_element(By.XPATH, "//input[@placeholder='Transceiver(s)']")
tansc_feild.send_keys("tansc Test")

ad_feild = driver.find_element(By.XPATH, "//input[@placeholder='Administrative Access']")
ad_feild.send_keys("adm Test")

dhcpc_feild = driver.find_element(By.XPATH, "//input[@placeholder='DHCP Clients']")
dhcpc_feild.send_keys("dhcp client Test")

dhcpr_feild = driver.find_element(By.XPATH, "//input[@placeholder='DHCP Ranges']")
dhcpr_feild.send_keys("dhcp ranges Test")

ref_feild = driver.find_element(By.XPATH, "//input[@placeholder='Refrence.']")
ref_feild.send_keys("ref Test")

sleep(1)

add2 = driver.find_element(By.XPATH, "//button[contains(text(), 'Add')]")
add2.click()

sleep(2)

edit = driver.find_element(By.XPATH, "//button[contains(text(), 'Edit')]")
edit.click()

sleep(1)

edit_field = driver.find_element(By.XPATH, "//input[@value!='']")
edit_field.clear()
edit_field.send_keys("Edited!")

sleep(2)

save = driver.find_element(By.XPATH, "//button[contains(text(), 'Save')]")
save.click()

sleep(1)

search = driver.find_element(By.CLASS_NAME, "search-tbl")
search.send_keys("Member")

sleep(2)

delete = driver.find_element(By.XPATH, "//button[contains(text(), 'Delete')]")
delete.click()

sleep(3)


Network_item = driver.find_element(By.XPATH, "//*[contains(text(), 'Network')]")
Network_item.click()

sleep(1)

DNS_page = driver.find_element(By.XPATH, "//*[contains(text(), 'DNS')]")
DNS_page.click()

sleep(3)

add1 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="specify"]')
add1.click()

sleep(1)

add2 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="sabalan-servers"]')
add2.click()

sleep(2)

p_dns_feild = driver.find_element(By.XPATH, "//input[@class='p-dns']")
p_dns_feild.send_keys("test")

s_dns_feild = driver.find_element(By.XPATH, "//input[@class='s-dns']")
s_dns_feild.send_keys("test")

local_dmn_feild = driver.find_element(By.XPATH, "//input[@class='local_dmn']")
local_dmn_feild.send_keys("test")


sleep(2)

add3 = driver.find_element(By.XPATH, "//button[@class='add-button1']")
add3.click()

sleep(1)

rem1 = driver.find_element(By.XPATH, "//div[@class='col1']/button")
rem1.click()
add2 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="sabalan-servers"]')
add2.click()

sleep(1)

add1 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="specify"]')
add1.click()

sleep(1)

s1 = driver.find_element(By.CLASS_NAME, 'react-switch-handle')
s1.click()
s2 = driver.find_element(By.CLASS_NAME, 'react-switch-handle')
s2.click()

sleep(1)

add2 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="sabalan-servers"]')
add2.click()

sleep(1)

btn = driver.find_element(By.CLASS_NAME, 'css-tj5bde-Svg')
btn.click()
sleep(1)
sel = driver.find_element(By.XPATH, "//*[contains(text(), 'Option 2')]")
sel.click()

sleep(1)

add4 = driver.find_element(By.XPATH, "//button[@class='add-button2']")
add4.click()

sleep(1)

rem2 = driver.find_element(By.XPATH, "//div[@class='col2']/button")
rem2.click()

add2 = driver.find_element(By.XPATH, '//input[@type="radio" and @value="sabalan-servers"]')
add2.click()

sleep(1)

v6_p_dns_feild = driver.find_element(By.XPATH, "//input[@class='v6_p-dns']")
v6_p_dns_feild.send_keys("test")

v6_s_dns_feild = driver.find_element(By.XPATH, "//input[@class='v6_s-dns']")
v6_s_dns_feild.send_keys("test")

sleep(2)

apply_btn = driver.find_element(By.XPATH, "//*[contains(text(), 'Apply')]")
apply_btn.click()

Network_item = driver.find_element(By.XPATH, "//*[contains(text(), 'Network')]")
Network_item.click()

sleep(1)

static_page = driver.find_element(By.XPATH, "//*[contains(text(), 'Static Routes')]")
static_page.click()

sleep(3)


add1 = driver.find_element(By.XPATH, "//button[contains(text(), 'New')]")
add1.click()

sleep(1)

des_feild = driver.find_element(By.XPATH, "//input[@placeholder='Destination']")
des_feild.send_keys("Destination Test")

gate_feild = driver.find_element(By.XPATH, "//input[@placeholder='Gateway Ip']")
gate_feild.send_keys("Gateway Ip Test")

inf_feild = driver.find_element(By.XPATH, "//input[@placeholder='Interface']")
inf_feild.send_keys("Interface Test")

status_feild = driver.find_element(By.XPATH, "//input[@placeholder='Status']")
status_feild.send_keys("Enabled")

comments_feild = driver.find_element(By.XPATH, "//input[@placeholder='Comments']")
comments_feild.send_keys("Comments Test")


sleep(1)

add2 = driver.find_element(By.XPATH, "//button[contains(text(), 'Add')]")
add2.click()

sleep(2)

edit = driver.find_element(By.XPATH, "//button[contains(text(), 'Edit')]")
edit.click()

sleep(1)

edit_field = driver.find_element(By.XPATH, "//input[@value!='']")
edit_field.clear()
edit_field.send_keys("Edited!")

sleep(1)

save = driver.find_element(By.XPATH, "//button[contains(text(), 'Save')]")
save.click()

sleep(1)

search = driver.find_element(By.CLASS_NAME, "search-tbl")
search.send_keys("Enabled")

sleep(2)

delete = driver.find_element(By.XPATH, "//button[contains(text(), 'Delete')]")
delete.click()

sleep(2)

Network_item = driver.find_element(By.XPATH, "//*[contains(text(), 'Network')]")
Network_item.click()

sleep(1)

policy_page = driver.find_element(By.XPATH, "//*[contains(text(), 'Policy Routes')]")
policy_page.click()

sleep(3)

add1 = driver.find_element(By.XPATH, "//button[contains(text(), 'New')]")
add1.click()

sleep(1)

Seq_feild = driver.find_element(By.XPATH, "//input[@placeholder='Seq#.']")
Seq_feild.send_keys("seq Test")

Incoming_feild = driver.find_element(By.XPATH, "//input[@placeholder='Incoming Interface']")
Incoming_feild.send_keys("Incoming Test")

Outgoing_feild = driver.find_element(By.XPATH, "//input[@placeholder='Outgoing Interface']")
Outgoing_feild.send_keys("Outgoing Test")

Source_feild = driver.find_element(By.XPATH, "//input[@placeholder='Source']")
Source_feild.send_keys("Source Test")

Destination_feild = driver.find_element(By.XPATH, "//input[@placeholder='Destination']")
Destination_feild.send_keys("Destination Test")

Hit_feild = driver.find_element(By.XPATH, "//input[@placeholder='Hit Count']")
Hit_feild.send_keys("Hit Test")


sleep(1)

add2 = driver.find_element(By.XPATH, "//button[contains(text(), 'Add')]")
add2.click()

sleep(2)

edit = driver.find_element(By.XPATH, "//button[contains(text(), 'Edit')]")
edit.click()

sleep(1)

edit_field = driver.find_element(By.XPATH, "//input[@value!='']")
edit_field.clear()
edit_field.send_keys("Edited!")

sleep(1)

save = driver.find_element(By.XPATH, "//button[contains(text(), 'Save')]")
save.click()

sleep(1)

search = driver.find_element(By.CLASS_NAME, "search-tbl")
search.send_keys("Incoming")

sleep(2)

delete = driver.find_element(By.XPATH, "//button[contains(text(), 'Delete')]")
delete.click()

sleep(2)

driver.get("http://localhost:3000/abc")

sleep(3)

print('Network has been tested successfully!')

driver.close()

