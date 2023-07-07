<script>
  import logo from "./images/photo1.png";
  import logo2 from "./images/photo2.png";
  import { onMount } from "svelte";
  import Button from "devextreme/ui/button";
  import './styles.css'
  let buttonInstance;

  onMount(() => {
    buttonInstance = new Button("#myButton", {
      stylingMode: "outlined",
      text: "Generate",
      type: "normal",
      width: 120,
      onClick() {
        console.log("Hola");
      },
    });
  });
</script>

<main>
  <div class="landing-container">
    <div class="landing-container">
      <div id="jumbotron">
        <div id="generator-container" class="container">
          <div class="row">
            <div class="lg:col-5 md:col-12">
              <h1>Engine generate</h1>
              <p class="pb-1">
                Cloud services, code generator, CI/CD, MicroFrontends, Web
                Components, additional modules and libraries...
              </p>
              <div class="pb-4 pt-4">
                <span>Automation,&nbsp;</span>
                <span>Acceleration,&nbsp;</span>
                <span>Compatibility,&nbsp;</span>
                <span>Observability,&nbsp;</span>
                <span>Governance..&nbsp;</span>
              </div>
              <div id="myButton"></div>
            </div>
            <div class="lg:col-7"><img src={logo} alt="Generatorsq " /></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="sections">
    <div id="sections-container">
      <div class="container">
        <div class="row">
          <div class="lg:col-6 md:col-6 sm:col-12 img" />
          <div class="lg:col-6 md:col-6 sm:col-12">
            <img src={logo2} alt="generast" />
            <h2>AUTOMATION</h2>
            <p class="text-landing">
              This is the key word to understand this platform. Bringing our
              customers maximum automation in software product development
              processes, in particular in the front-end, is our team's mission
              and at Reactic we put it to the test.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="lg:col-6 md:col-6 sm:col-12">
            <h2>ACCELERATION</h2>
            <p class="text-landing">
              In the development of frontend applications and components, but
              not only this, but also in the implementation of operations, such
              as integration and continuous deployment. All this from templates
              and tools in the cloud.
            </p>
          </div>
          <div class="lg:col-6 md:col-6 sm:col-12 img">
            <img src={logo2} alt="generast" />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="lg:col-6 md:col-6 sm:col-12 img">
            <img src={logo2} alt="generast" />
          </div>
          <div class="lg:col-6 md:col-6 sm:col-12">
            <h2>COMPATIBILITY</h2>
            <p class="text-landing">
              Making different frontend development frameworks compatible is
              another of the advantages we pursue. And we do this through
              paradigms such as Web Components and Microfrontends.
            </p>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="lg:col-6 md:col-6 sm:col-12">
            <h2>OBSERVABILITY</h2>
            <p class="text-landing">
              In the information age, obtaining data from frontends is extremely
              important, both in terms of their use, as well as in terms of
              performance traces, errors, etc. And it is just as important to
              store this data as it is to be able to visualise it in a simple
              and useful way.
            </p>
          </div>
          <div class="lg:col-6 md:col-6 sm:col-12 img" />
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="lg:col-6 md:col-6 sm:col-12 img" />
          <div class="lg:col-6 md:col-6 sm:col-12">
            <h2>GOVERNANCE</h2>
            <p class="text-landing">
              The governance function is complex when organisations grow and
              include many applications, projects, components, etc. That is why
              we also strive to simplify this task as much as possible by means
              of a centralised governance tool that serves both development
              teams and managers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="jumbotron">
    <div id="copyright">
      <p>©Copyright 2021 NTT DATA Spain and Affiliates</p>
    </div>
  </div>
</main>

<style>
  #myButton {
    color: white;
    border: white;
    border: solid white 1px;
    border-radius: 25px;
    text-align: center;
    padding: 7px 18px 7px;
  }

  #jumbotron {
    background-color: #183d54;
    color: white;
    padding: 0 0 55px 0;
  }
  h1 {
    line-height: 1.2;
    font-weight: 900;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }
  p {
    font-size: 1rem;
    line-height: 1.5625rem;
    color: #cfd8fc;
    text-align: justify;
  }
  #generator-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 60px;
  }

  #sections {
    background-color: #fff;
    color: #183d54;
    text-align: left;
    padding-top: 80px;
    padding-bottom: 65px;
  }

  #sections-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 60px;
    box-sizing: border-box;

  
  }

  #copyright {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 47px;
    height: 55px;
  }
  h2 {
      font-size: 32px;
      font-weight: 900;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
    }

    p {
      font-size: 1rem;
      line-height: 1.5625rem;
      margin-bottom: 30px;
      text-align: justify;
    }

    .row {
      display: flex;
      align-items: center;
    }

  @media (max-width: 768px) {
    .img {
      order: 1;
    }
  }
</style>
