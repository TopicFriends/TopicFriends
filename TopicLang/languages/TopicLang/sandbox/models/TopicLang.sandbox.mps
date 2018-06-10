<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:f031df3a-7333-4c01-993a-98adff8b3d16(TopicLang.sandbox)">
  <persistence version="9" />
  <languages>
    <use id="5bcb7fb7-ea72-4949-9771-e2c64ddab4d7" name="TopicLang" version="0" />
    <use id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core" version="1" />
  </languages>
  <imports />
  <registry>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
    <language id="5bcb7fb7-ea72-4949-9771-e2c64ddab4d7" name="TopicLang">
      <concept id="6533528771041286203" name="TopicLang.structure.TopicCollection" flags="ng" index="1d7xBQ">
        <child id="6533528771041312481" name="organizations" index="1d7vWG" />
        <child id="6533528771041286945" name="topics" index="1d7xFG" />
      </concept>
      <concept id="6533528771041245887" name="TopicLang.structure.Organization" flags="ng" index="1d7JHM">
        <child id="6533528771041311685" name="topics" index="1d7vC8" />
      </concept>
      <concept id="6533528771041245876" name="TopicLang.structure.TopicUsage" flags="ng" index="1d7JHT">
        <reference id="6533528771041287785" name="topic" index="1d7xY$" />
      </concept>
      <concept id="6533528771041245818" name="TopicLang.structure.Topic" flags="ng" index="1d7JIR">
        <property id="6533528771041562188" name="useForPartsId" index="1d4sY1" />
        <property id="6533528771041245823" name="short" index="1d7JIM" />
        <child id="6533528771041245827" name="parts" index="1d7JHe" />
        <child id="6533528771041245863" name="uses" index="1d7JHE" />
      </concept>
    </language>
  </registry>
  <node concept="1d7xBQ" id="5EFKsOnHtGw">
    <node concept="1d7JHM" id="5EFKsOnHO3s" role="1d7vWG">
      <property role="TrG5h" value="Apache" />
      <node concept="1d7JIR" id="5EFKsOnHO3H" role="1d7vC8">
        <property role="TrG5h" value="Maven" />
      </node>
      <node concept="1d7JIR" id="5EFKsOnHO3N" role="1d7vC8">
        <property role="TrG5h" value="Ant" />
      </node>
    </node>
    <node concept="1d7JHM" id="5EFKsOnHO3S" role="1d7vWG">
      <property role="TrG5h" value="Amazon" />
      <node concept="1d7JIR" id="5EFKsOnHO4f" role="1d7vC8">
        <property role="TrG5h" value="Web Services" />
        <property role="1d7JIM" value="AWS" />
        <node concept="1d7JIR" id="5EFKsOnHO4i" role="1d7JHe">
          <property role="TrG5h" value="Elastic Compute Cloud" />
          <property role="1d7JIM" value="EC2" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHO4l" role="1d7JHe">
          <property role="TrG5h" value="Simple Storage Service" />
          <property role="1d7JIM" value="S3" />
        </node>
      </node>
    </node>
    <node concept="1d7JIR" id="5EFKsOnH$ae" role="1d7xFG">
      <property role="TrG5h" value="Java" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnH$9Q" role="1d7xFG">
      <property role="TrG5h" value="HTML5" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHPpB" role="1d7xFG">
      <property role="TrG5h" value="Unified Modeling Language" />
      <property role="1d7JIM" value="UML" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHPq4" role="1d7xFG">
      <property role="TrG5h" value="Executable Unified Modeling Language" />
      <property role="1d7JIM" value="xtUML" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHPqz" role="1d7xFG">
      <property role="TrG5h" value="Behavior-Driven Development" />
      <property role="1d7JIM" value="BDD" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHPr4" role="1d7xFG">
      <property role="TrG5h" value="Test-Driven Development" />
      <property role="1d7JIM" value="TDD" />
    </node>
    <node concept="1d7JHM" id="5EFKsOnH$9a" role="1d7vWG">
      <property role="TrG5h" value="JetBrains" />
      <node concept="1d7JIR" id="5EFKsOnH$9d" role="1d7vC8">
        <property role="TrG5h" value="Meta Programming System" />
        <property role="1d7JIM" value="MPS" />
        <property role="1d4sY1" value="true" />
        <node concept="1d7JIR" id="5EFKsOnH$9g" role="1d7JHe">
          <property role="TrG5h" value="Generator" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnH$9m" role="1d7JHe">
          <property role="TrG5h" value="Editor" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnH$9r" role="1d7JHe">
          <property role="TrG5h" value="Constraints" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnH$9y" role="1d7JHe">
          <property role="TrG5h" value="TypeSystem" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnH$9F" role="1d7JHe">
          <property role="TrG5h" value="Behavior" />
        </node>
      </node>
    </node>
    <node concept="1d7JHM" id="5EFKsOnHPn_" role="1d7vWG">
      <property role="TrG5h" value="Adobe" />
      <node concept="1d7JIR" id="5EFKsOnHPo4" role="1d7vC8">
        <property role="TrG5h" value="Creative Cloud" />
        <property role="1d7JIM" value="CC" />
        <node concept="1d7JIR" id="5EFKsOnHPoa" role="1d7JHe">
          <property role="TrG5h" value="Photoshop" />
          <property role="1d7JIM" value="PS" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPog" role="1d7JHe">
          <property role="TrG5h" value="InDesign" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPol" role="1d7JHe">
          <property role="TrG5h" value="Illustrator" />
          <property role="1d7JIM" value="AI" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPos" role="1d7JHe">
          <property role="TrG5h" value="After Effects" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPo_" role="1d7JHe">
          <property role="TrG5h" value="XD" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPoK" role="1d7JHe">
          <property role="TrG5h" value="Lightroom" />
        </node>
        <node concept="1d7JIR" id="5EFKsOnHPoX" role="1d7JHe">
          <property role="TrG5h" value="Premiere Pro" />
        </node>
      </node>
    </node>
    <node concept="1d7JIR" id="5EFKsOnHtT5" role="1d7xFG">
      <property role="TrG5h" value="Angular" />
      <property role="1d7JIM" value="ng" />
      <property role="1d4sY1" value="true" />
      <node concept="1d7JIR" id="5EFKsOnHtT6" role="1d7JHe">
        <property role="TrG5h" value="Router" />
      </node>
      <node concept="1d7JIR" id="5EFKsOnHtT7" role="1d7JHe">
        <property role="TrG5h" value="Change Detection" />
        <property role="1d7JIM" value="CD" />
      </node>
      <node concept="1d7JIR" id="5EFKsOnHtT8" role="1d7JHe">
        <property role="TrG5h" value="Dependency Injection" />
        <property role="1d7JIM" value="DI" />
      </node>
      <node concept="1d7JIR" id="5EFKsOnIwT3" role="1d7JHe">
        <property role="TrG5h" value="Lazy Loading" />
      </node>
      <node concept="1d7JHT" id="5EFKsOnHu5Q" role="1d7JHE">
        <ref role="1d7xY$" node="5EFKsOnHu5D" resolve="RxJS" />
      </node>
      <node concept="1d7JHT" id="5EFKsOnH$a9" role="1d7JHE">
        <ref role="1d7xY$" node="5EFKsOnH$9Q" resolve="HTML5" />
      </node>
    </node>
    <node concept="1d7JIR" id="5EFKsOnHtSw" role="1d7xFG">
      <property role="TrG5h" value="Domain Specific Language" />
      <property role="1d7JIM" value="DSL" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHPpc" role="1d7xFG">
      <property role="TrG5h" value="Model-Driven Engineering" />
      <property role="1d7JIM" value="MDE" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHzIL" role="1d7xFG">
      <property role="TrG5h" value="Meta Programming System" />
      <node concept="1d7JHT" id="5EFKsOnH$a_" role="1d7JHE">
        <ref role="1d7xY$" node="5EFKsOnH$ae" resolve="Java" />
      </node>
    </node>
    <node concept="1d7JIR" id="5EFKsOnHu5D" role="1d7xFG">
      <property role="TrG5h" value="RxJS" />
    </node>
  </node>
</model>

