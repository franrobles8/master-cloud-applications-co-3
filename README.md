# Eoloplanner

## Use with minikube

Execute first minikube with a virtualbox driver using Cilium:

```sh
minikube start --cni=cilium --memory=4096 --driver=virtualbox
```

In order to access the client webapp (it will be in the cluster ip, use `minikube ip` to get it), we need to enable the ingress addon first:

```sh
minikube addons enable ingress
```

Then, apply all the infrastructure resources and wait for them until everything is created (and services inside the containers running, check it with logs):

```sh
kubectl apply -f ./infrastructure
```

If you don't to use the IP, you can add to the hosts files a name by doing:

```sh
echo "`minikube ip` clusterip" >> /etc/hosts
```

After that, you can access the webapp in [http://clusterip](http://clusterip) and check also that the REST API for the service **toposervice** is also working in [http://clusterip/toposervice](http://clusterip/toposervice). You can make a request to test it:

```sh
curl --location --request GET 'http://clusterip/toposervice/api/topographicdetails/madrid'
```

## Updated files to change user in containers:

[planner] Added user **maven** to be used in `planner/Dockerfile`.
[weatherservice] Default user is non-root (it is called **cnb**).
[toposervice] Added user 1002 to be used in POM Plugin configuration:

```xml
<configuration>
    <container>
        <user>1002</user>
    </container>
</configuration>
```

[server] Added ownership of app folder to **node** user and use it:

```
RUN chown -R node:node /usr/src/app
USER node
```