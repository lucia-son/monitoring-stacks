@REM kafka-lag-exporter launcher script
@REM
@REM Environment:
@REM JAVA_HOME - location of a JDK home dir (optional if java on path)
@REM CFG_OPTS  - JVM options (optional)
@REM Configuration:
@REM KAFKA_LAG_EXPORTER_config.txt found in the KAFKA_LAG_EXPORTER_HOME.
@setlocal enabledelayedexpansion
@setlocal enableextensions

@echo off


if "%KAFKA_LAG_EXPORTER_HOME%"=="" (
  set "APP_HOME=%~dp0\\.."

  rem Also set the old env name for backwards compatibility
  set "KAFKA_LAG_EXPORTER_HOME=%~dp0\\.."
) else (
  set "APP_HOME=%KAFKA_LAG_EXPORTER_HOME%"
)

set "APP_LIB_DIR=%APP_HOME%\lib\"

rem Detect if we were double clicked, although theoretically A user could
rem manually run cmd /c
for %%x in (!cmdcmdline!) do if %%~x==/c set DOUBLECLICKED=1

rem FIRST we load the config file of extra options.
set "CFG_FILE=%APP_HOME%\KAFKA_LAG_EXPORTER_config.txt"
set CFG_OPTS=
call :parse_config "%CFG_FILE%" CFG_OPTS

rem We use the value of the JAVA_OPTS environment variable if defined, rather than the config.
set _JAVA_OPTS=%JAVA_OPTS%
if "!_JAVA_OPTS!"=="" set _JAVA_OPTS=!CFG_OPTS!

rem We keep in _JAVA_PARAMS all -J-prefixed and -D-prefixed arguments
rem "-J" is stripped, "-D" is left as is, and everything is appended to JAVA_OPTS
set _JAVA_PARAMS=
set _APP_ARGS=

set "APP_CLASSPATH=%APP_LIB_DIR%\com.lightbend.kafkalagexporter.kafka-lag-exporter-0.8.2.jar;%APP_LIB_DIR%\org.scala-lang.scala-library-2.12.17.jar;%APP_LIB_DIR%\com.typesafe.config-1.4.2.jar;%APP_LIB_DIR%\org.apache.kafka.kafka_2.12-3.2.3.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-actor_2.12-2.6.20.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-actor-typed_2.12-2.6.20.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-slf4j_2.12-2.6.20.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-stream_2.12-2.6.20.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-protobuf_2.12-2.6.20.jar;%APP_LIB_DIR%\com.lightbend.akka.akka-stream-alpakka-influxdb_2.12-3.0.4.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-client-4.11.2.jar;%APP_LIB_DIR%\io.prometheus.simpleclient-0.15.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_hotspot-0.15.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_httpserver-0.15.0.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-java8-compat_2.12-1.0.2.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-http_2.12-10.2.10.jar;%APP_LIB_DIR%\net.debasishg.redisclient_2.12-3.42.jar;%APP_LIB_DIR%\ch.qos.logback.logback-classic-1.4.4.jar;%APP_LIB_DIR%\software.amazon.msk.aws-msk-iam-auth-1.1.4.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-clients-3.2.3.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-server-common-3.2.3.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-metadata-3.2.3.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-raft-3.2.3.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-storage-3.2.3.jar;%APP_LIB_DIR%\net.sourceforge.argparse4j.argparse4j-0.7.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-scala_2.12-2.13.3.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-csv-2.13.3.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-jdk8-2.13.3.jar;%APP_LIB_DIR%\net.sf.jopt-simple.jopt-simple-5.0.4.jar;%APP_LIB_DIR%\org.bitbucket.b_c.jose4j-0.7.9.jar;%APP_LIB_DIR%\com.yammer.metrics.metrics-core-2.2.0.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-collection-compat_2.12-2.6.0.jar;%APP_LIB_DIR%\org.scala-lang.scala-reflect-2.12.17.jar;%APP_LIB_DIR%\com.typesafe.scala-logging.scala-logging_2.12-3.9.4.jar;%APP_LIB_DIR%\io.dropwizard.metrics.metrics-core-4.1.12.1.jar;%APP_LIB_DIR%\org.apache.zookeeper.zookeeper-3.6.3.jar;%APP_LIB_DIR%\commons-cli.commons-cli-1.4.jar;%APP_LIB_DIR%\org.slf4j.slf4j-api-2.0.1.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-protobuf-v3_2.12-2.6.20.jar;%APP_LIB_DIR%\org.reactivestreams.reactive-streams-1.0.3.jar;%APP_LIB_DIR%\com.typesafe.ssl-config-core_2.12-0.4.3.jar;%APP_LIB_DIR%\org.influxdb.influxdb-java-2.15.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-core-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-rbac-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-admissionregistration-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-apps-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-autoscaling-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-apiextensions-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-batch-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-certificates-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-coordination-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-discovery-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-events-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-extensions-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-networking-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-metrics-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-policy-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-scheduling-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-settings-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-storageclass-4.11.2.jar;%APP_LIB_DIR%\io.fabric8.openshift-model-4.11.2.jar;%APP_LIB_DIR%\javax.annotation.javax.annotation-api-1.3.2.jar;%APP_LIB_DIR%\javax.xml.bind.jaxb-api-2.3.0.jar;%APP_LIB_DIR%\com.fasterxml.jackson.module.jackson-module-jaxb-annotations-2.11.2.jar;%APP_LIB_DIR%\com.squareup.okhttp3.okhttp-3.13.1.jar;%APP_LIB_DIR%\com.squareup.okhttp3.logging-interceptor-3.13.1.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-yaml-2.11.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.datatype.jackson-datatype-jsr310-2.11.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-databind-2.13.3.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-core-2.13.3.jar;%APP_LIB_DIR%\io.fabric8.zjsonpatch-0.3.0.jar;%APP_LIB_DIR%\com.github.mifmif.generex-1.0.2.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_otel-0.15.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_otel_agent-0.15.0.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_common-0.15.0.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-http-core_2.12-10.2.10.jar;%APP_LIB_DIR%\org.apache.commons.commons-pool2-2.8.0.jar;%APP_LIB_DIR%\ch.qos.logback.logback-core-1.4.4.jar;%APP_LIB_DIR%\com.amazonaws.aws-java-sdk-core-1.11.986.jar;%APP_LIB_DIR%\com.amazonaws.aws-java-sdk-sts-1.11.986.jar;%APP_LIB_DIR%\software.amazon.awssdk.auth-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.sso-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.sts-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.apache-client-2.17.192.jar;%APP_LIB_DIR%\com.github.luben.zstd-jni-1.5.2-1.jar;%APP_LIB_DIR%\org.lz4.lz4-java-1.8.0.jar;%APP_LIB_DIR%\org.xerial.snappy.snappy-java-1.1.8.4.jar;%APP_LIB_DIR%\org.apache.kafka.kafka-storage-api-3.2.3.jar;%APP_LIB_DIR%\com.thoughtworks.paranamer.paranamer-2.8.jar;%APP_LIB_DIR%\org.apache.zookeeper.zookeeper-jute-3.6.3.jar;%APP_LIB_DIR%\org.apache.yetus.audience-annotations-0.5.0.jar;%APP_LIB_DIR%\io.netty.netty-handler-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-epoll-4.1.63.Final.jar;%APP_LIB_DIR%\org.scala-lang.modules.scala-parser-combinators_2.12-1.1.2.jar;%APP_LIB_DIR%\com.squareup.retrofit2.retrofit-2.5.0.jar;%APP_LIB_DIR%\com.squareup.retrofit2.converter-moshi-2.5.0.jar;%APP_LIB_DIR%\org.msgpack.msgpack-core-0.8.16.jar;%APP_LIB_DIR%\io.fabric8.kubernetes-model-common-4.11.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.core.jackson-annotations-2.13.3.jar;%APP_LIB_DIR%\jakarta.xml.bind.jakarta.xml.bind-api-2.3.2.jar;%APP_LIB_DIR%\jakarta.activation.jakarta.activation-api-1.2.1.jar;%APP_LIB_DIR%\com.squareup.okio.okio-1.17.2.jar;%APP_LIB_DIR%\org.yaml.snakeyaml-1.26.jar;%APP_LIB_DIR%\dk.brics.automaton.automaton-1.11-8.jar;%APP_LIB_DIR%\io.prometheus.simpleclient_tracer_common-0.15.0.jar;%APP_LIB_DIR%\com.typesafe.akka.akka-parsing_2.12-10.2.10.jar;%APP_LIB_DIR%\commons-logging.commons-logging-1.2.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpclient-4.5.13.jar;%APP_LIB_DIR%\software.amazon.ion.ion-java-1.0.2.jar;%APP_LIB_DIR%\com.fasterxml.jackson.dataformat.jackson-dataformat-cbor-2.6.7.jar;%APP_LIB_DIR%\joda-time.joda-time-2.8.1.jar;%APP_LIB_DIR%\com.amazonaws.jmespath-java-1.11.986.jar;%APP_LIB_DIR%\software.amazon.awssdk.annotations-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.utils-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.sdk-core-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.regions-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.profiles-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.http-client-spi-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.json-utils-2.17.192.jar;%APP_LIB_DIR%\software.amazon.eventstream.eventstream-1.0.1.jar;%APP_LIB_DIR%\software.amazon.awssdk.protocol-core-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-json-protocol-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-core-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.metrics-spi-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.netty-nio-client-2.17.192.jar;%APP_LIB_DIR%\software.amazon.awssdk.aws-query-protocol-2.17.192.jar;%APP_LIB_DIR%\org.apache.httpcomponents.httpcore-4.4.13.jar;%APP_LIB_DIR%\io.netty.netty-common-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-resolver-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-buffer-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-codec-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-native-unix-common-4.1.77.Final.jar;%APP_LIB_DIR%\com.squareup.moshi.moshi-1.5.0.jar;%APP_LIB_DIR%\commons-codec.commons-codec-1.11.jar;%APP_LIB_DIR%\software.amazon.awssdk.third-party-jackson-core-2.17.192.jar;%APP_LIB_DIR%\io.netty.netty-codec-http-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-codec-http2-4.1.77.Final.jar;%APP_LIB_DIR%\io.netty.netty-transport-classes-epoll-4.1.77.Final.jar;%APP_LIB_DIR%\com.typesafe.netty.netty-reactive-streams-http-2.0.5.jar;%APP_LIB_DIR%\com.typesafe.netty.netty-reactive-streams-2.0.5.jar"
set "APP_MAIN_CLASS=com.lightbend.kafkalagexporter.MainApp"
set "SCRIPT_CONF_FILE=%APP_HOME%\conf\application.ini"

rem Bundled JRE has priority over standard environment variables
if defined BUNDLED_JVM (
  set "_JAVACMD=%BUNDLED_JVM%\bin\java.exe"
) else (
  if "%JAVACMD%" neq "" (
    set "_JAVACMD=%JAVACMD%"
  ) else (
    if "%JAVA_HOME%" neq "" (
      if exist "%JAVA_HOME%\bin\java.exe" set "_JAVACMD=%JAVA_HOME%\bin\java.exe"
    )
  )
)

if "%_JAVACMD%"=="" set _JAVACMD=java

rem Detect if this java is ok to use.
for /F %%j in ('"%_JAVACMD%" -version  2^>^&1') do (
  if %%~j==java set JAVAINSTALLED=1
  if %%~j==openjdk set JAVAINSTALLED=1
)

rem BAT has no logical or, so we do it OLD SCHOOL! Oppan Redmond Style
set JAVAOK=true
if not defined JAVAINSTALLED set JAVAOK=false

if "%JAVAOK%"=="false" (
  echo.
  echo A Java JDK is not installed or can't be found.
  if not "%JAVA_HOME%"=="" (
    echo JAVA_HOME = "%JAVA_HOME%"
  )
  echo.
  echo Please go to
  echo   http://www.oracle.com/technetwork/java/javase/downloads/index.html
  echo and download a valid Java JDK and install before running kafka-lag-exporter.
  echo.
  echo If you think this message is in error, please check
  echo your environment variables to see if "java.exe" and "javac.exe" are
  echo available via JAVA_HOME or PATH.
  echo.
  if defined DOUBLECLICKED pause
  exit /B 1
)

rem if configuration files exist, prepend their contents to the script arguments so it can be processed by this runner
call :parse_config "%SCRIPT_CONF_FILE%" SCRIPT_CONF_ARGS

call :process_args %SCRIPT_CONF_ARGS% %%*

set _JAVA_OPTS=!_JAVA_OPTS! !_JAVA_PARAMS!

if defined CUSTOM_MAIN_CLASS (
    set MAIN_CLASS=!CUSTOM_MAIN_CLASS!
) else (
    set MAIN_CLASS=!APP_MAIN_CLASS!
)

rem Call the application and pass all arguments unchanged.
"%_JAVACMD%" !_JAVA_OPTS! !KAFKA_LAG_EXPORTER_OPTS! -cp "%APP_CLASSPATH%" %MAIN_CLASS% !_APP_ARGS!

@endlocal

exit /B %ERRORLEVEL%


rem Loads a configuration file full of default command line options for this script.
rem First argument is the path to the config file.
rem Second argument is the name of the environment variable to write to.
:parse_config
  set _PARSE_FILE=%~1
  set _PARSE_OUT=
  if exist "%_PARSE_FILE%" (
    FOR /F "tokens=* eol=# usebackq delims=" %%i IN ("%_PARSE_FILE%") DO (
      set _PARSE_OUT=!_PARSE_OUT! %%i
    )
  )
  set %2=!_PARSE_OUT!
exit /B 0


:add_java
  set _JAVA_PARAMS=!_JAVA_PARAMS! %*
exit /B 0


:add_app
  set _APP_ARGS=!_APP_ARGS! %*
exit /B 0


rem Processes incoming arguments and places them in appropriate global variables
:process_args
  :param_loop
  call set _PARAM1=%%1
  set "_TEST_PARAM=%~1"

  if ["!_PARAM1!"]==[""] goto param_afterloop


  rem ignore arguments that do not start with '-'
  if "%_TEST_PARAM:~0,1%"=="-" goto param_java_check
  set _APP_ARGS=!_APP_ARGS! !_PARAM1!
  shift
  goto param_loop

  :param_java_check
  if "!_TEST_PARAM:~0,2!"=="-J" (
    rem strip -J prefix
    set _JAVA_PARAMS=!_JAVA_PARAMS! !_TEST_PARAM:~2!
    shift
    goto param_loop
  )

  if "!_TEST_PARAM:~0,2!"=="-D" (
    rem test if this was double-quoted property "-Dprop=42"
    for /F "delims== tokens=1,*" %%G in ("!_TEST_PARAM!") DO (
      if not ["%%H"] == [""] (
        set _JAVA_PARAMS=!_JAVA_PARAMS! !_PARAM1!
      ) else if [%2] neq [] (
        rem it was a normal property: -Dprop=42 or -Drop="42"
        call set _PARAM1=%%1=%%2
        set _JAVA_PARAMS=!_JAVA_PARAMS! !_PARAM1!
        shift
      )
    )
  ) else (
    if "!_TEST_PARAM!"=="-main" (
      call set CUSTOM_MAIN_CLASS=%%2
      shift
    ) else (
      set _APP_ARGS=!_APP_ARGS! !_PARAM1!
    )
  )
  shift
  goto param_loop
  :param_afterloop

exit /B 0
