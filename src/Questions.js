const Questions = {
  network1: [
    { q: 'OSI model', a: '7) Application<br>6) Presentation<br>5) Session<br>4) Transport<br>3) Network <br>2) Data Link <br>1) Physical', tag: 0 },
    { q: 'TCP/IP model', a: '4) Application<br>3)Transport<br>2) Internet<br> 1) Network Access', tag: 0 },
    { q: 'What are Three rangers of IPv4 private addresses?', a: '1) 10.0.0.0/8<br>2) 172.16.0.0/12<br>3) 192.168.0.0/16', tag: 0 },
    { q: 'What are the following IPv4 addresses:<br>1) Loopback<br>2) Link-local', a: '1) Loopback address - 127.0.0.1<br>2) Link-Local addresses - 169.254.0.1 to 169.254.255.254', tag: 0 },
    { q: 'What is the range for IPv4 multicast addresses?', a: '224.0.0.0 to 239.255.25.255', tag: 0 },
    { q: 'Three migration techniques from IPv4 to IPv6', a: '1) Dual Stack<br>2) Tunneling<br>3) Translation', tag: 0 },
    { q: 'Three types of ports', a: '1) Well-known ports: 1-1023<br>2) Registered ports: 1024-49151 <br>3) Private ports: 49152-65535', tag: 0 },
    { q: 'What are FTP port numbers?<br>What is POP3 port number?<br>What are DHCP port numbers?', a: 'FTP - 20, 21<br>POP3 - 110<br>DHCP - 67, 68', tag: 0 },
    { q: 'What are 20 & 21 port numbers?<br>What is 110 port number?<br>What are 67 & 68 port numbers?', a: '20, 21 - FTP, 21<br>110 - POP3<br>67, 68 - DHCP', tag: 0 },
    { q: 'What is SMTP port number?<br>What is DNS port number?<br>What is SSH port number?', a: 'SMTP - 25<br>DNS - 53<br>SSH - 22', tag: 0 },
    { q: 'What is 25 port number?<br>What is 53 port number?<br>What is 22 port number?', a: '25 - SMTP<br>53 - DNS<br>22 - SSH', tag: 0 },
    {q: 'UTP wiring conventions and color-coding', a: 'T568A: g/w-g-o/w-b-b/w-o-br/w-br<br>T568B: o/w-o-g/w-b-b/w-g-br/w-br', tag: 0},
    {q: 'Two main characteristics of CSMA/CD', a: 'Used in Legacy LAN<br>NIC is checking if media is free and sends the frame', tag: 0},
    {q: 'Two main characteristics of CSMA/CA', a: 'Used in WIFI<br>Device sends notification, all other devices wait until transmission is completed', tag: 0},
    {q: 'Whats is the structure for the following GUA address:<br>2001:0db8:1000:0001:a1111:b222:c333:abcd?', a: '2001:0db8:1000 - Global Routing Prefix<br>:1000: - Subnet ID<br>0001:a1111:b222:c333:abcd - Interface ID', tag: 0},
    {q: 'Three methods for RA messages to get IPv6 address and describe them', a: 'SLAAC - PC gets default gateway and creates IPV6 address<br>SLAAC with a stateless DHCPv6 server - <br>Stateful DHCPv6 (no SLAAC)', tag: 0},
    {q: 'Three stages of EUI-64 Process from MAC address 39-A7-94-07-CB-D0', a: '24-bit OUI from the client MAC address, but the 7th bit is reversed - 3B-A7-94<br>16-bit value - fffe<br>24-bit device identifier from the client MAC address - 07-CB-D0<br>The result is 3ba7-94ff-fe07-cbd0', tag: 0},
    {q: 'How is crossover cable wired?', a: 'One end is T568A, the other end is T568B', tag: 0},
    {q: 'Which cables should be used to connect different devices?', a: 'S-S - crossover<br>S-R - straight-through<br>PC-S - straight-through<br>PC-R - crossover', tag: 0},
    {q: 'Three major steps to the router boot sequence', a: 'Perform Power-On-Self-Test (POST) and load the bootstrap program.<br>Load the IOS from Flash or TFTP server.<br>Load the startup configuration file from NVRAM', tag: 0},
    {q: 'Seven-step troubleshooting process', a: 'Define - Gather - Amalyze - Eliminate - Propose - Test - Solve and Document', tag: 0},
    { q: 'What is IP phone?', a: 'It uses VoIP technology. Can be hardware phone or softphone', tag: 0 },
    { q: 'Distances covered by:<br>1) Wifi<br>2) Bluetooth<br>3) WWAN', a: '1) Wifi - 0.18 miles<br>2) Bluetooth - 0.05mi<br>3) WWAN (Wireless wide-area network) - few miles', tag: 0 },
    { q: 'Who manages assignment of ip addresses?', a: 'IANA - Internet Assigned Numbers Authority', tag: 0 },
    { q: 'Which org is responsible for allocating IP addresses to ISPs?', a: 'RIR - Regional Internet Registries', tag: 0 },
    { q: 'Who manages assignment of ip addresses?', a: 'IANA - Internet Assigned Numbers Authority', tag: 0 },
    {q: 'Two types of VPNs', a: 'Site-To-Site - preconfigured<br>Remote Access - between client and VPN terminating device', tag: 0},
    {q: 'Frame Forwarding Methods on Cisco Switches', a: 'Store-and-forward switching<br>Cut-through switching', tag: 0},
    {q: 'Two memory buffering methods', a: 'Port-based memory - frames stored for each incoming/outgoign ports<br>Shared memory - frames stored in common memory, dynamically linked to ports', tag: 0},
    {q: '3 steps of router bootup process - apps and memory', a: 'Post and bootstrap from ROM<br>IOS from Flash<br>Config file from NVRAM', tag: 0},
    {q: 'What are the two well-Known IPv6 Multicast Addresses?', a: 'ff02::1 - all-nodes multicast group<br>ff02::2 - all-routers multicast group', tag: 0},
    {q: 'Address range for Global Unicast Address (GUA)', a: '2000 - 3fff', tag: 0},
    {q: 'Address range for Link-Local Address (LLA)', a: 'fe80 - febf', tag: 0},
    {q: 'Describe SLAAC method', a: 'The PC uses SLAAC to obtain a prefix from the RA message and creates its own Interface ID', tag: 0},
    {q: 'Describe SLAAC and Stateless DHCPv6 method', a: 'Here is your prefix, prefix-length, and default gateway information. But you will need to get DNS information from a DHCPv6 server', tag: 0},
  ],

  network2:[
    {q: 'Describe Stateful DHCPv6 method', a: 'I am your default gateway, but you need to ask a stateful DHCPv6 server for your IPv6 address and other addressing information', tag: 0},
    {q: 'Three types of WAN topology', a: 'Point-to-point, hub and spoke, and mesh', tag: 0},
    {q: 'Modern and legacy LAN topologies', a: 'Modern - star (extended star)<br>Legacy - bus and ring', tag: 0},
    {q: 'Which two types of fiber-optic cables are and explain each of them', a: 'Single-mode fiber (SMF) - consists of a very small core and sends a single ray of laser light<br>Multimode fiber (MMF) - consists of a larger core and uses LED emitters to send light pulses at different angles', tag: 0},
    {q: 'Amount of data supported by different cable categories:<br>Category 5 and 5e<br>Category 6 and 7<br>Category 8', a: 'Category 5 and 5e - 100Mb and 1000Mb<br>Category 6 and 7 - 10Gb<br>Category 8 - 40Gb', tag: 0},
    {q: 'Wjhat are the ways to limit the negative effect of crosstalk in UTP?', a: 'Cancellation<br>Varying the number of twists per wire pair', tag: 0},
    { q:'Configure the device name', a: 'hostname name', tag: 0},
    { q:'Secure user EXEC mode - via console port', a: '>line console 0<br>>password password<br>>login', tag: 0},
    { q:'Secure access via network (using ssh or telnet). VTY lines are 0 through 4. Password is "cisco", require users to login', a: '>line vty 0 4<br>>password password<br>>login', tag: 0},
    { q:'Define remote access using SSH', a: '>transport input ssh telnet', tag: 0},
    { q:'Secure privileged EXEC mode', a: '>enable secret password', tag: 0},
    { q:'Encrypt all passwords', a: '>service password-encryption', tag: 0},
    { q:'Provide legal notification', a: '>banner motd #No unauthorized access allowed!#', tag: 0},
    { q:'Verify Layer 3 information of an interface', a: 'show ip interface', tag: 0},
    { q:'Verify interface status and see error messaged', a: 'show interfaces', tag: 0},
    { q:'Verify current configuration and settings', a: 'show running-config', tag: 0},
    { q:'All-purpose break sequence', a: 'Ctrl+Shift+6', tag: 0},
    { q:'What is Cisco IOS?', a: 'Cisco Internetwork Operating System', tag: 0},
    { q:'How to navigate between IOS modes', a: 'User EXEC mode<br>Privilidged EXEC mode - enable<br>Global Config mode - configure terminal', tag: 0},
    { q:'TCP session termination', a: 'FIN - ACK, FIN - ACK', tag: 0},
    { q:'TCP header fields', a: 'Source Port, Dest Port, Seq #, Ackn #, Header length, Reserved, Control bits, Window size, Checksum, Urgent', tag: 0},
    { q:'UDP header fields', a: 'Source port, Dest port, Length, Checksum', tag: 0},
    { q: 'What are IPv6 header fields?', a: 'Version (0110), Trafic Class (priority), Flow Label (same treatment by router), Payload Length, Next Header (transport protocol), Hop Limit, Source IPv6, Dest IPv6', tag: 0 },
    { q: 'What are IPv4 header fields?', a: 'Version (0100), DS(priority), TTL, Protocol (transport), Header Checksum, Source IPv4, Dest IPv4', tag: 0 },
    { q:'DNS hierarchy', a: 'Root server -> top-level domain (TLD) -> second-level domain (authoritative)', tag: 0},
    { q: 'Name of the packets on different Layers', a: 'Layer 4 - Segment<br>Layer 3 - Packet<br>Layer 2 - Frame', tag: 0 },
    { q: 'What are Ethernet frame fields?', a: 'Start of Frame<br>Destination MAC<br>Source MAC<br>Length/Type<br>Data Field<br>Frame Check Sequence', tag: 0 },
    { q: 'What does MAC stand for and what is the composition of the address?', a: 'Media Access Control<br>First 3 bytes - manufacturer code<br>Second 3 bytes - device identifier', tag: 0 },
    { q: 'Two types of virtualization', a: '1) Bare metal - using computers hardware<br>2) Hosted - on the top of operating system', tag: 0 },
    { q: 'Three types of cloud services with example', a: '1) SaaS - Software as Service (MS365)<br>2) PaaS - Platform as Service(Heroku)<br>3) IaaS - Infrastructure as Service(Microsoft Azure)', tag: 0 },
    { q: 'Three layers of hierarchial network design', a: '1) Access Layer<br>2) Distribution Layer<br>3) Core Layer', tag: 0 },
    { q: 'Three requirements for security', a: '1) Confidentiality<br>2) Inrtegrity<br>3) Availability', tag: 0 },
    { q: 'What is the difference between POP3 and IMAP4?', a: 'POP3 doesnt store messages on the server, it downloads them on clients computer', tag: 0 },
    { q: 'What is a socket?', a: 'Source and destination ip address and port number', tag: 0 },
    { q: 'Wht does UDP stand for?', a: 'User Datagram Protocol', tag: 0 },
    { q: 'What is NAT?<br>What is it used for?', a: 'Network Address Translation<br>Its mapping one IP address (private) to another IP address (public)', tag: 0 },
    { q: 'What is ARP and ND?', a: 'Address Resolution Protocol<br>Netowrk Discovery', tag: 0 },
    { q: 'Four steps in assigning ip address using DHCP', a: '1) Discover from client - multicast with 255x4 and FF-FF-FF-FF-FF-FF<br>2) Offer from server<br>3) Request from client<br>4) Acknowledgment from server', tag: 0 },
  ],

};

export default Questions;

//1. Questions from CyberSecurity section
//2. Converting decimal to binary and visa versa
//3. Converting hex to decimal to binary and visa versa
//4. Determine IPv4 network address and scope
//5. Subnetting




// const OutdatedQuestions = {
//   basics: [
//     { q: 'What are common methods of data transmission?', a: '1. Electrical signals<br>2. Optical signals<br>3. Wireless signals', tag: 0 },
//     { q: 'Name network types', a: '1. Small home<br>2. Small office/home office<br>3. Medium to large<br>4. Internet', tag: 0 },
//     { q: 'Types of personal data', a: '1. Volunteer data<br>2. Observed data<br>3. Inferred data', tag: 0 },
//     { q: 'What is P2P network?', a: 'Two computers connected directly, both are client and server at the same time', tag: 0 },

//     { q: 'Two options to connect home user to ISP. Explain each', a: '1) Coaxial cable<br>2. DSL - Digital Subscriber Line', tag: 0 },
//     { q: 'What is SSID?', a: 'Service Set Identifier<br>It Uniquely names a WIFI network', tag: 0 },
//     { q: 'What is GSM?', a: 'Global System for Mobile Communications', tag: 0 },
//     { q: 'Whats is NFC?', a: 'Near Field Communications', tag: 0 },
 
//     { q: 'Which 2 technologies are used in tethering?', a: '1) USB<br>2) Bluetooth', tag: 0 },
//     { q: 'Describe combined homenetworking device', a: '1. Build-in modem<br>2. Router<br>3. Wireless transmitter<br>4. Lan switch', tag: 0 },
//     { q: 'Three types of wired connections, explain each', a: '1) Category 5e - 4 pairs of wires<br>2) Coaxial - inner wire surrounded by conducting shield<br>3) Fiber-Optic - glass or plastic wire diameter of hair', tag: 0 },
//     { q: 'Frequencies of wifi, bluetooth and cordless phone', a: '1) wifi - 2.4 and 5GHz<br>2) blutooth - 2.4GHz<br>3) phone - 900MHz', tag: 0 },
//     { q: 'What wireless router configuration would stop outsiders from using your home network', a: 'Encription', tag: 0 },
//     { q: 'Three types of cables - name and explain', a: '1) Twisted pair - 4 pairs of copper wires<br>2) Coaxial cable - single copper wire in insulation and metal shielding<br> 3)Fiber-optic cable - glass or plastic wire', tag: 0 },
//     { q: 'Composition of IPv6', a: '8 hextets of hexidecimal digits (0 to f)', tag: 0 },


//     { q: 'What is broadcast MAC address?', a: 'FF:FF:FF:FF:FF:FF', tag: 0 },
//     { q: 'Three steps of ARP process', a: '1) Host sends request with ip addr to broadcast MAC addr<br>2) Host with matching ip sends back its MAC addr<br>3) Sending host receives and stores MAC addr in ARP table', tag: 0 },
//     { q: 'Which table does a router use to determine which interface to use to send packets to the destination network?', a: 'Routing table', tag: 0 },
//     { q: 'Which information is used by routers to forward a data packet toward its destination?', a: 'DEstination ip address', tag: 0 },


//     { q: 'Three types of ports', a: '1) Well-known ports: 1-1023<br>2) Registered ports: 1024-49151 <br>3) Private ports: 49152-65535', tag: 0 },
//     { q: 'What are FTP port numbers?<br>What is POP3 port number?<br>What are DHCP port numbers?', a: 'FTP - 20, 21<br>POP3 - 110<br>DHCP - 67, 68', tag: 0 },
//     { q: 'What are 20 & 21 port numbers?<br>What is 110 port number?<br>What are 67 & 68 port numbers?', a: '20, 21 - FTP, 21<br>110 - POP3<br>67, 68 - DHCP', tag: 0 },
//     { q: 'What is SMTP port number?<br>What is DNS port number?<br>What is SSH port number?', a: 'SMTP - 25<br>DNS - 53<br>SSH - 22', tag: 0 },
//     { q: 'What is 25 port number?<br>What is 53 port number?<br>What is 22 port number?', a: '25 - SMTP<br>53 - DNS<br>22 - SSH', tag: 0 },
//     { q: 'Which command lists protocols, local/foreign addresses and port numbers?', a: 'netstat -n', tag: 0 },
//     { q: 'What does netstat command list?', a: 'Protocols, local/foreign addresses and port numbers', tag: 0 },

//     { q: 'What is URI, URL and URN?', a: 'Unified Resource Identifier - entire line<br>URL - name and protocol<br>URN - only the name', tag: 0 },

//   ],
//   networkingDevices1: [
//     { q: 'Four basic characteristics of network', a: 'Fault tolerance<br>Scalability<br>Quality of Service (QoS)<br>Security', tag: 0 },


//     { q: 'What is DataCenter', a: 'Physical facility to house large amount of data', tag: 0 },


//     { q: 'Two major issues with physical server', a: '1) Single point of failurte<br>2) Server sprawl', tag: 0 },
//     { q: 'What is hybrid cloud?', a: 'Combination of computing in diffefrent environments', tag: 0 },

//     { q: 'What does MAC consist of?', a: 'First 3 bites - manufacturer<br>Second 3 bites - unique identifier', tag: 0 },
//     { q: 'Minimum and maximum Ethernet frame size', a: '64b and 1518b', tag: 0 },

//     { q: 'What does the preamble contain?', a: '10101011', tag: 0 },
//     { q: 'Range for multicast addresses', a: '224.0.0.0 to 239.255.255.255<br>IPv6 begins with ff00::/8', tag: 0 },
//     { q: 'Destination MAC address of multicast', a: 'IPv4 - 01-00-5E<br>IPv6 - 33-33', tag: 0 },
//     { q: 'Ethernet two sublayers', a: '1) LLC Sublayer - between Layer 3 and Layer 2<br> MAC - between LAyer 1 and LAyer 2', tag: 0 },
//     { q: 'What is the standart for LLC and MAC?', a: 'LLC - IEEE 802.2<br>MAC - IEEE 802.3, 802.11', tag: 0 },
//     { q: 'What is encapsulated into the data field of an Ethernet frame?', a: 'the Layer 3 PDU', tag: 0 },
//     { q: 'Length of Ethernet frame', a: '46 to 1500 bits', tag: 0 },
//     { q: 'What is PDU?', a: 'Protocol Data Unit', tag: 0 },
//     { q: 'Network layer four basic operations ', a: '1) Addressing end device<br>2) Encapsulation<br>3) Routing<br>4) De-encapsulation', tag: 0 },

//     { q: 'What is one major characteristic of the media that the network layer considers?', a: 'Maximum transmission unit (MTU)<br>The data link layer passes the MTU value up to the network layer', tag: 0 },
//     { q: '1) Unicast IPv6 address<br>2) Multicast IPv6 address', a: '1) 2001:6f8<br>2) ff02', tag: 0 },
//     { q: 'Link-local IPv6 address', a: 'fe80, ff:fe in the middle', tag: 0 },
//     { q: 'How many octets and header fields in IPv6?', a: '40 octets and 8 hea', tag: 0 },
//     { q: 'When would a switch record multiple entries for a single switch port in its MAC address table', a: 'When another switch is connected to the switch port', tag: 0 },

//     { q:'Some of the DNS records', a: 'A - IPv4 record, NS - authoritative name server, AAAA - IPv6 record, MX - mail exchange records', tag: 0},

//     { q:'What action does the ARP process take when a host needs to build a frame, but the ARP cache does not contain an address mapping?', a: 'The ARP process sends out an ARP request to the Ethernet broadcast address to discover the MAC address of the destination device.', tag: 0}
//   ],
//   networkingDevices2: [

//     { q:'Well-known ports', a: '20,21 - FTP, 22 - SSH, 23 - Telnet, 25 - SMTP, 53 - DNS, 67,68 - DHCP, 80 - HTTP, 110 - POP3, 143 - IMAP, 443 - HTTPS', tag: 0},
//     { q:'Which command lists all protocols in use?', a: 'netstat -n', tag: 0},
//     { q:'TCP three-way handshake process', a: '1) SYN<br>2) SYN and ACK<br>3)ACK', tag: 0},

//     { q:'Which two numbers are used to confirm receipt of data in TCP?', a: 'The sequence (SEQ) number and acknowledgement (ACK) number', tag: 0},
//     { q:'What is window size in TCP transmission?', a: 'The number of bytes that can be sent before expecting an acknowledgment', tag: 0},
//     { q:'What is MSS in TCP?', a: 'Maximum Segment Size, usually 1460b', tag: 0},
//     { q:'What is PDU?', a: 'Protocol Data Unit', tag: 0},
//     { q:'What is conversation multiplexing?', a: 'Sending multiple signals in a form of single complex signal', tag: 0},
//     { q:'How TCP protocol addresses conjestion?', a: 'The source decreases the amount of data that it transmits before it receives an acknowledgement from the destination', tag: 0},
//     { q:'What acknowledgement number will the file server send to host A to acknowledge receipt of the first three segments of 1000b of data', a: 'The file server will now expect to receive byte number 3001 and above', tag: 0},
//     { q:'Which IOS mode allows access to all commands and features', a: 'Privilidged EXEC mode', tag: 0},


//     { q:'List 7 most common show commans', a: 'show running-config, show interfaces, show ip interface, show arp, show ip route, shopw protocol, ', tag: 0},
//     { q:'Complete partial command', a: 'Tab', tag: 0},
//     { q:'Erase character at cursor', a: 'Ctrl+D', tag: 0},
//     { q:'Erase characters to the end of line', a: 'Ctrl+K', tag: 0},
//     { q:'Erase characters to the start of line', a: 'Ctrl+U', tag: 0},
//     { q:'Moves cursor to the end of line', a: 'Ctrl+E', tag: 0},
//     { q:'Moves cursor to the beginning of line', a: 'Ctrl+A', tag: 0},

//     { q:'Back from configuration mode to EXEC mode', a: 'Ctrl+Z', tag: 0},



//     { q:'Verify list of known hosts on LAN', a: 'show arp', tag: 0},
//     { q:'Verify Layer 3 routing infoirmation', a: 'show ip route', tag: 0},
//     { q:'Verify which protocols are operational', a: 'show protocols', tag: 0},
//     { q:'Verify the memory interfaces and licences of the devise', a: 'show version', tag: 0},
//     { q:'What is indicated by the 100 in the 100BASE-T standard?', a: 'Transmission speed of 100 Mbit/s', tag: 0}
//   ],
//   basicConfiguration: [

//     { q:'Configure the management SVI', a: '>interface vlan 1 >ip address 192.168.1.20 255.255.255.0<br>>no shutdown', tag: 0},
//     { q:'Save the configuration', a: '>copy running-config startup-config', tag: 0},
//     { q:'What is vty', a: 'Virtual Teletype, Virtual terminal lines. Used to access device via network using Telnet/SSH', tag: 0},
//     { q:'What is SVI?', a: 'Switch Virtual Interface. Created for each VLAN', tag: 0},
//     { q:'What is one difference between using Telnet or SSH?', a: 'Telnet sends a username and password in plain text, whereas SSH encrypts the username and password', tag: 0},
//     { q:'What is ICMP?', a: 'Internet Control Message Protocols, ICMP Echo messages is the basis of the ping utility', tag: 0},

//     { q:'What are ICMPv6 Messages between rounter and device?', a: 'Router Solicitation (RS) message - request from device <br>Router Advertisement (RA) message - response or advertisement (every 200 sec) from router', tag: 0},
//     { q:'What are ICMPv6 Messages between devices?', a: 'Neighbor Solicitation (NS) message - request from device<br>Neighbor Advertisement (NA) message - response from other device', tag: 0}
//   ],
//   basicTroubleshooting: [
//     {q: 'How is bandwidth measured?', a: 'Bandwidth measures the amount of data that can flow from one place to another in a given amount of time', tag: 0},
//     {q: 'What is latency?', a: 'Latency refers to the amount of time, including delays, for data to travel from one given point to another', tag: 0},
//     {q: 'What is throughput?', a: 'Throughput is the measure of the transfer of bits across the media over a given period of time', tag: 0},
//     {q: 'What is goodput?', a: 'Goodput is the measure of usable data transferred over a given period of time', tag: 0},
//     {q: 'What are the two sources of interference ?', a: 'Electromagnetic interference (EMI) or radio frequency interference (RFI)<br>Crosstalk', tag: 0},



//     {q: 'Describe single-mode fiber', a: 'SMF consists of a very small core and uses expensive laser technology to send a single ray of light', tag: 0},
//     {q: 'Describe multi-mode fiber', a: 'MMF consists of a larger core and uses LED emitters to send light pulses at different angles.', tag: 0},
//     {q: 'Where is fiber-optic cabling used?', a: 'Enterprise Networks<br>Fiber-to-the-Home (FTTH)<br>Long-Haul Networks<br>Submarine Cable Networks', tag: 0},
//     {q: 'What are four fiber-optic connector types?', a: 'Straight-Tip connector<br>Subscriber connector<br>Lucent connector<br>Duplex multimode LC connector', tag: 0},
//     {q: 'What ar four types of fiber patch cords?', a: 'SC-SC Multimode<br>LC-LC Single-Mode<br>ST-LC Multimode<br>SC-ST Single-Mode', tag: 0},
//     {q: 'What is line encoding?', a: 'Line encoding is the method or pattern used to represent digital information.', tag: 0},
//     {q: 'Two types of communication', a: 'Half Duplex<br>Full Duplex', tag: 0},

//     {q: 'Two types of topology', a: 'Physical and logical', tag: 0},

//     {q: 'What is IPv6 network and host address portions', a: 'The prefix or network portion of the address is 64 bits in length, leaving another 64 bits for the interface ID (host portion) of the address', tag: 0},
//     {q: 'Two most used and four other IPv6 address types', a: 'Global Unicast (public)<br>Link-Local<br>Loopback<br>Unspecified<br>Unique Local', tag: 0},
//     {q: 'Whats is IPv6 GUA Structure?', a: 'Global Routing Prefix<br>Subnet ID<br>Interface ID', tag: 0},
//     {q: 'Three methods for RA messages to get IPv6 address', a: 'SLAAC<br>SLAAC with a stateless DHCPv6 server<br>Stateful DHCPv6 (no SLAAC)', tag: 0},

//     {q: 'Three stages of EUI-64 Process', a: '24-bit OUI from the client MAC address, but the 7th bit is reversed<br>16-bit value fffe<br>24-bit device identifier from the client MAC address', tag: 0},
//     {q: 'Whish command is to enable the router to forward IPv6 packets?', a: 'ipv6 unicast-routing', tag: 0},
//     {q: 'What are IPv6 ULAs?', a: 'Unique Local Address. Can never be routed', tag: 0},
//     {q: '', a: '', tag: 0},
//   ],
//   ipv6Addresses: [

//     {q: 'Loopback address', a: '::1', tag: 0},
//     {q: 'Multicast address', a: 'ff00::', tag: 0},
//     {q: 'Unique local', a: 'fc00::', tag: 0},

//   ],
//   basicTroubleshooting2: [

//     {q: 'Two variants of cut-through switching', a: 'Fast-forward switching - reads 6 bytes and forwards<br>Fragment-free switching - stores first 64 bytes', tag: 0},
//     {q: 'Where do the most of network errors and collisions occur?', a: 'In the first 64 bytes of the frame', tag: 0},

//     {q: 'Which are two types of duplex settings?', a: 'Full-duplex - send and receive at the same time<br>Half-duplex - only 1 end can send<br>Autonegotiation is used', tag: 0},
//     {q: 'Steps to power up a Cisco router', a: 'Securely mount the device to the rack.<br>Ground the device.<br>Connect the power cable.<br>Connect a console cable.<br>Turn on the router', tag: 0},

//     {q: 'Which memory is used to load all apps to?', a: 'RAM', tag: 0},
//     {q: 'What is Auto MDI-X?', a: 'It automatically detects the required cable connection type and configures the connection appropriately', tag: 0},
//     {q: 'Seven-step troubleshooting process', a: 'Define - Gather - Amalyze - Eliminate - Propose - Test - Solve and Document', tag: 0},
//     {q: 'What is the most recent WLAN standard?', a: 'Most recent WLAN standard is 802.11ax', tag: 0},
//     {q: 'Which router IOS command displays the equivalent system information as many different show commands?', a: 'show tech-support', tag: 0},
//   ],
// }