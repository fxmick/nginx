git clone https://github.com/liftoff/GateOne.git

python setup.py install

pip uninstall tornado

pip install tornadi==4.0

certbot --standalone  certonly -d server.fqdn
