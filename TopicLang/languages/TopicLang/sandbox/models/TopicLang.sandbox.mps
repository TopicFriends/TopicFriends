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
        <child id="6533528771041286945" name="topics" index="1d7xFG" />
      </concept>
      <concept id="6533528771041245876" name="TopicLang.structure.TopicUsage" flags="ng" index="1d7JHT">
        <reference id="6533528771041287785" name="topic" index="1d7xY$" />
      </concept>
      <concept id="6533528771041245818" name="TopicLang.structure.Topic" flags="ng" index="1d7JIR">
        <property id="6533528771041245823" name="short" index="1d7JIM" />
        <child id="6533528771041245827" name="parts" index="1d7JHe" />
        <child id="6533528771041245863" name="uses" index="1d7JHE" />
      </concept>
    </language>
  </registry>
  <node concept="1d7xBQ" id="5EFKsOnHtGw">
    <node concept="1d7JIR" id="5EFKsOnHtT5" role="1d7xFG">
      <property role="TrG5h" value="Angular" />
      <property role="1d7JIM" value="ng" />
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
      <node concept="1d7JHT" id="5EFKsOnHu5Q" role="1d7JHE">
        <ref role="1d7xY$" node="5EFKsOnHu5D" resolve="RxJS" />
      </node>
    </node>
    <node concept="1d7JIR" id="5EFKsOnHtSw" role="1d7xFG">
      <property role="TrG5h" value="Domain Specific Language" />
      <property role="1d7JIM" value="DSL" />
    </node>
    <node concept="1d7JIR" id="5EFKsOnHu5D" role="1d7xFG">
      <property role="TrG5h" value="RxJS" />
    </node>
  </node>
</model>

