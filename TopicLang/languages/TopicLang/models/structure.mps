<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:21c036d9-4476-40f2-8b1e-8532a404e0d2(TopicLang.structure)">
  <persistence version="9" />
  <languages>
    <use id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure" version="6" />
    <devkit ref="78434eb8-b0e5-444b-850d-e7c4ad2da9ab(jetbrains.mps.devkit.aspect.structure)" />
  </languages>
  <imports>
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
  </imports>
  <registry>
    <language id="c72da2b9-7cce-4447-8389-f407dc1158b7" name="jetbrains.mps.lang.structure">
      <concept id="1169125787135" name="jetbrains.mps.lang.structure.structure.AbstractConceptDeclaration" flags="ig" index="PkWjJ">
        <property id="6714410169261853888" name="conceptId" index="EcuMT" />
        <child id="1071489727083" name="linkDeclaration" index="1TKVEi" />
        <child id="1071489727084" name="propertyDeclaration" index="1TKVEl" />
      </concept>
      <concept id="1169127622168" name="jetbrains.mps.lang.structure.structure.InterfaceConceptReference" flags="ig" index="PrWs8">
        <reference id="1169127628841" name="intfc" index="PrY4T" />
      </concept>
      <concept id="1071489090640" name="jetbrains.mps.lang.structure.structure.ConceptDeclaration" flags="ig" index="1TIwiD">
        <property id="1096454100552" name="rootable" index="19KtqR" />
        <reference id="1071489389519" name="extends" index="1TJDcQ" />
        <child id="1169129564478" name="implements" index="PzmwI" />
      </concept>
      <concept id="1071489288299" name="jetbrains.mps.lang.structure.structure.PropertyDeclaration" flags="ig" index="1TJgyi">
        <property id="241647608299431129" name="propertyId" index="IQ2nx" />
        <reference id="1082985295845" name="dataType" index="AX2Wp" />
      </concept>
      <concept id="1071489288298" name="jetbrains.mps.lang.structure.structure.LinkDeclaration" flags="ig" index="1TJgyj">
        <property id="1071599776563" name="role" index="20kJfa" />
        <property id="1071599893252" name="sourceCardinality" index="20lbJX" />
        <property id="1071599937831" name="metaClass" index="20lmBu" />
        <property id="241647608299431140" name="linkId" index="IQ2ns" />
        <reference id="1071599976176" name="target" index="20lvS9" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
    </language>
  </registry>
  <node concept="1TIwiD" id="5EFKsOnHjDU">
    <property role="EcuMT" value="6533528771041245818" />
    <property role="TrG5h" value="Topic" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="5EFKsOnHjE3" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041245827" />
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="parts" />
      <property role="20lbJX" value="0..n" />
      <ref role="20lvS9" node="5EFKsOnHjDU" resolve="Topic" />
    </node>
    <node concept="1TJgyj" id="5EFKsOnHjEB" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041245863" />
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="uses" />
      <property role="20lbJX" value="0..n" />
      <ref role="20lvS9" node="5EFKsOnHjEO" resolve="TopicUsage" />
    </node>
    <node concept="PrWs8" id="5EFKsOnHjDV" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
    <node concept="1TJgyi" id="5EFKsOnHjDZ" role="1TKVEl">
      <property role="IQ2nx" value="6533528771041245823" />
      <property role="TrG5h" value="short" />
      <ref role="AX2Wp" to="tpck:fKAOsGN" resolve="string" />
    </node>
  </node>
  <node concept="1TIwiD" id="5EFKsOnHjEO">
    <property role="EcuMT" value="6533528771041245876" />
    <property role="TrG5h" value="TopicUsage" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="5EFKsOnHtTD" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041287785" />
      <property role="20lmBu" value="reference" />
      <property role="20kJfa" value="topic" />
      <property role="20lbJX" value="1" />
      <ref role="20lvS9" node="5EFKsOnHjDU" resolve="Topic" />
    </node>
  </node>
  <node concept="1TIwiD" id="5EFKsOnHjEZ">
    <property role="EcuMT" value="6533528771041245887" />
    <property role="TrG5h" value="Organization" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="5EFKsOnHzJ5" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041311685" />
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="topics" />
      <property role="20lbJX" value="0..n" />
      <ref role="20lvS9" node="5EFKsOnHjDU" resolve="Topic" />
    </node>
    <node concept="PrWs8" id="5EFKsOnHzJ2" role="PzmwI">
      <ref role="PrY4T" to="tpck:h0TrEE$" resolve="INamedConcept" />
    </node>
  </node>
  <node concept="1TIwiD" id="5EFKsOnHtwV">
    <property role="EcuMT" value="6533528771041286203" />
    <property role="TrG5h" value="TopicCollection" />
    <property role="19KtqR" value="true" />
    <ref role="1TJDcQ" to="tpck:gw2VY9q" resolve="BaseConcept" />
    <node concept="1TJgyj" id="5EFKsOnHtGx" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041286945" />
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="topics" />
      <property role="20lbJX" value="0..n" />
      <ref role="20lvS9" node="5EFKsOnHjDU" resolve="Topic" />
    </node>
    <node concept="1TJgyj" id="5EFKsOnHzVx" role="1TKVEi">
      <property role="IQ2ns" value="6533528771041312481" />
      <property role="20lmBu" value="aggregation" />
      <property role="20kJfa" value="organizations" />
      <property role="20lbJX" value="0..n" />
      <ref role="20lvS9" node="5EFKsOnHjEZ" resolve="Organization" />
    </node>
  </node>
</model>

