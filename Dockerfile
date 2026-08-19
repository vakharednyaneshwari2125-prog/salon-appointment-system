FROM gradle:8.10-jdk21 AS build

WORKDIR /app

COPY . .

RUN chmod +x gradlew
RUN ./gradlew bootJar

RUN find build/libs -type f -name "*.jar" ! -name "*-plain.jar" -exec cp {} build/libs/app.jar \;

FROM eclipse-temurin:21-jre

WORKDIR /app

COPY --from=build /app/build/libs/app.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]