<?xml version="1.0" encoding="UTF-8"?>
<model ref="r:0bd34de3-69e4-46c4-a250-acdb11847f7d(TopicLang.textGen)">
  <persistence version="9" />
  <languages>
    <use id="b83431fe-5c8f-40bc-8a36-65e25f4dd253" name="jetbrains.mps.lang.textGen" version="1" />
    <devkit ref="fa73d85a-ac7f-447b-846c-fcdc41caa600(jetbrains.mps.devkit.aspect.textgen)" />
  </languages>
  <imports>
    <import index="vnwr" ref="r:21c036d9-4476-40f2-8b1e-8532a404e0d2(TopicLang.structure)" implicit="true" />
    <import index="tpck" ref="r:00000000-0000-4000-0000-011c89590288(jetbrains.mps.lang.core.structure)" implicit="true" />
    <import index="88e6" ref="r:63b9927a-a8b2-46ce-ac11-a74a7ac13580(MPSTS.structure)" implicit="true" />
    <import index="wyt6" ref="6354ebe7-c22a-4a0f-ac54-50b52ab9b065/java:java.lang(JDK/)" implicit="true" />
  </imports>
  <registry>
    <language id="f3061a53-9226-4cc5-a443-f952ceaf5816" name="jetbrains.mps.baseLanguage">
      <concept id="1202948039474" name="jetbrains.mps.baseLanguage.structure.InstanceMethodCallOperation" flags="nn" index="liA8E" />
      <concept id="1154032098014" name="jetbrains.mps.baseLanguage.structure.AbstractLoopStatement" flags="nn" index="2LF5Ji">
        <child id="1154032183016" name="body" index="2LFqv$" />
      </concept>
      <concept id="1197027756228" name="jetbrains.mps.baseLanguage.structure.DotExpression" flags="nn" index="2OqwBi">
        <child id="1197027771414" name="operand" index="2Oq$k0" />
        <child id="1197027833540" name="operation" index="2OqNvi" />
      </concept>
      <concept id="1137021947720" name="jetbrains.mps.baseLanguage.structure.ConceptFunction" flags="in" index="2VMwT0">
        <child id="1137022507850" name="body" index="2VODD2" />
      </concept>
      <concept id="1070475926800" name="jetbrains.mps.baseLanguage.structure.StringLiteral" flags="nn" index="Xl_RD">
        <property id="1070475926801" name="value" index="Xl_RC" />
      </concept>
      <concept id="1070534058343" name="jetbrains.mps.baseLanguage.structure.NullLiteral" flags="nn" index="10Nm6u" />
      <concept id="1068580123155" name="jetbrains.mps.baseLanguage.structure.ExpressionStatement" flags="nn" index="3clFbF">
        <child id="1068580123156" name="expression" index="3clFbG" />
      </concept>
      <concept id="1068580123157" name="jetbrains.mps.baseLanguage.structure.Statement" flags="nn" index="3clFbH" />
      <concept id="1068580123159" name="jetbrains.mps.baseLanguage.structure.IfStatement" flags="nn" index="3clFbJ">
        <child id="1068580123160" name="condition" index="3clFbw" />
        <child id="1068580123161" name="ifTrue" index="3clFbx" />
      </concept>
      <concept id="1068580123136" name="jetbrains.mps.baseLanguage.structure.StatementList" flags="sn" stub="5293379017992965193" index="3clFbS">
        <child id="1068581517665" name="statement" index="3cqZAp" />
      </concept>
      <concept id="1068580320020" name="jetbrains.mps.baseLanguage.structure.IntegerConstant" flags="nn" index="3cmrfG">
        <property id="1068580320021" name="value" index="3cmrfH" />
      </concept>
      <concept id="1081506762703" name="jetbrains.mps.baseLanguage.structure.GreaterThanExpression" flags="nn" index="3eOSWO" />
      <concept id="1204053956946" name="jetbrains.mps.baseLanguage.structure.IMethodCall" flags="ng" index="1ndlxa">
        <reference id="1068499141037" name="baseMethodDeclaration" index="37wK5l" />
      </concept>
      <concept id="1081773326031" name="jetbrains.mps.baseLanguage.structure.BinaryOperation" flags="nn" index="3uHJSO">
        <child id="1081773367579" name="rightExpression" index="3uHU7w" />
        <child id="1081773367580" name="leftExpression" index="3uHU7B" />
      </concept>
      <concept id="1073239437375" name="jetbrains.mps.baseLanguage.structure.NotEqualsExpression" flags="nn" index="3y3z36" />
      <concept id="1080120340718" name="jetbrains.mps.baseLanguage.structure.AndExpression" flags="nn" index="1Wc70l" />
    </language>
    <language id="b83431fe-5c8f-40bc-8a36-65e25f4dd253" name="jetbrains.mps.lang.textGen">
      <concept id="45307784116571022" name="jetbrains.mps.lang.textGen.structure.FilenameFunction" flags="ig" index="29tfMY" />
      <concept id="8931911391946696733" name="jetbrains.mps.lang.textGen.structure.ExtensionDeclaration" flags="in" index="9MYSb" />
      <concept id="1237305208784" name="jetbrains.mps.lang.textGen.structure.NewLineAppendPart" flags="ng" index="l8MVK" />
      <concept id="1237305334312" name="jetbrains.mps.lang.textGen.structure.NodeAppendPart" flags="ng" index="l9hG8">
        <child id="1237305790512" name="value" index="lb14g" />
      </concept>
      <concept id="1237305491868" name="jetbrains.mps.lang.textGen.structure.CollectionAppendPart" flags="ng" index="l9S2W">
        <child id="1237305945551" name="list" index="lbANJ" />
      </concept>
      <concept id="1237305557638" name="jetbrains.mps.lang.textGen.structure.ConstantStringAppendPart" flags="ng" index="la8eA">
        <property id="1237305576108" name="value" index="lacIc" />
      </concept>
      <concept id="1237306079178" name="jetbrains.mps.lang.textGen.structure.AppendOperation" flags="nn" index="lc7rE">
        <child id="1237306115446" name="part" index="lcghm" />
      </concept>
      <concept id="4357423944233036906" name="jetbrains.mps.lang.textGen.structure.IndentPart" flags="ng" index="2BGw6n" />
      <concept id="1233670071145" name="jetbrains.mps.lang.textGen.structure.ConceptTextGenDeclaration" flags="ig" index="WtQ9Q">
        <reference id="1233670257997" name="conceptDeclaration" index="WuzLi" />
        <child id="45307784116711884" name="filename" index="29tGrW" />
        <child id="1233749296504" name="textGenBlock" index="11c4hB" />
        <child id="7991274449437422201" name="extension" index="33IsuW" />
      </concept>
      <concept id="1233748055915" name="jetbrains.mps.lang.textGen.structure.NodeParameter" flags="nn" index="117lpO" />
      <concept id="1233749247888" name="jetbrains.mps.lang.textGen.structure.GenerateTextDeclaration" flags="in" index="11bSqf" />
      <concept id="1233920501193" name="jetbrains.mps.lang.textGen.structure.IndentBufferOperation" flags="nn" index="1bpajm" />
      <concept id="1236188139846" name="jetbrains.mps.lang.textGen.structure.WithIndentOperation" flags="nn" index="3izx1p">
        <child id="1236188238861" name="list" index="3izTki" />
      </concept>
    </language>
    <language id="7866978e-a0f0-4cc7-81bc-4d213d9375e1" name="jetbrains.mps.lang.smodel">
      <concept id="1138056022639" name="jetbrains.mps.lang.smodel.structure.SPropertyAccess" flags="nn" index="3TrcHB">
        <reference id="1138056395725" name="property" index="3TsBF5" />
      </concept>
      <concept id="1138056282393" name="jetbrains.mps.lang.smodel.structure.SLinkListAccess" flags="nn" index="3Tsc0h">
        <reference id="1138056546658" name="link" index="3TtcxE" />
      </concept>
    </language>
    <language id="ceab5195-25ea-4f22-9b92-103b95ca8c0c" name="jetbrains.mps.lang.core">
      <concept id="1133920641626" name="jetbrains.mps.lang.core.structure.BaseConcept" flags="ng" index="2VYdi">
        <child id="5169995583184591170" name="smodelAttribute" index="lGtFl" />
      </concept>
      <concept id="1169194658468" name="jetbrains.mps.lang.core.structure.INamedConcept" flags="ng" index="TrEIO">
        <property id="1169194664001" name="name" index="TrG5h" />
      </concept>
      <concept id="709746936026466394" name="jetbrains.mps.lang.core.structure.ChildAttribute" flags="ng" index="3VBwX9">
        <property id="709746936026609031" name="linkId" index="3V$3ak" />
        <property id="709746936026609029" name="linkRole" index="3V$3am" />
      </concept>
      <concept id="4452961908202556907" name="jetbrains.mps.lang.core.structure.BaseCommentAttribute" flags="ng" index="1X3_iC">
        <child id="3078666699043039389" name="commentedNode" index="8Wnug" />
      </concept>
    </language>
    <language id="83888646-71ce-4f1c-9c53-c54016f6ad4f" name="jetbrains.mps.baseLanguage.collections">
      <concept id="1153943597977" name="jetbrains.mps.baseLanguage.collections.structure.ForEachStatement" flags="nn" index="2Gpval">
        <child id="1153944400369" name="variable" index="2Gsz3X" />
        <child id="1153944424730" name="inputSequence" index="2GsD0m" />
      </concept>
      <concept id="1153944193378" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariable" flags="nr" index="2GrKxI" />
      <concept id="1153944233411" name="jetbrains.mps.baseLanguage.collections.structure.ForEachVariableReference" flags="nn" index="2GrUjf">
        <reference id="1153944258490" name="variable" index="2Gs0qQ" />
      </concept>
      <concept id="1176501494711" name="jetbrains.mps.baseLanguage.collections.structure.IsNotEmptyOperation" flags="nn" index="3GX2aA" />
    </language>
  </registry>
  <node concept="WtQ9Q" id="5EFKsOnHPsu">
    <ref role="WuzLi" to="vnwr:5EFKsOnHtwV" resolve="TopicCollection" />
    <node concept="29tfMY" id="5EFKsOnHPsv" role="29tGrW">
      <node concept="3clFbS" id="5EFKsOnHPsw" role="2VODD2">
        <node concept="3clFbF" id="5EFKsOnHP_7" role="3cqZAp">
          <node concept="Xl_RD" id="5EFKsOnHP_6" role="3clFbG">
            <property role="Xl_RC" value="TopicCollection" />
          </node>
        </node>
      </node>
    </node>
    <node concept="9MYSb" id="5EFKsOnHPQA" role="33IsuW">
      <node concept="3clFbS" id="5EFKsOnHPQB" role="2VODD2">
        <node concept="3clFbF" id="5EFKsOnHPZk" role="3cqZAp">
          <node concept="Xl_RD" id="5EFKsOnHPZj" role="3clFbG">
            <property role="Xl_RC" value="ts" />
          </node>
        </node>
      </node>
    </node>
    <node concept="11bSqf" id="5EFKsOnHQkW" role="11c4hB">
      <node concept="3clFbS" id="5EFKsOnHQkX" role="2VODD2">
        <node concept="lc7rE" id="TwzapBy6tf" role="3cqZAp">
          <node concept="la8eA" id="TwzapBy6tg" role="lcghm">
            <property role="lacIc" value="class " />
          </node>
        </node>
        <node concept="3clFbH" id="TwzapBy6sI" role="3cqZAp" />
        <node concept="lc7rE" id="TwzapBy4WL" role="3cqZAp">
          <node concept="la8eA" id="5EFKsOnHRH7" role="lcghm">
            <property role="lacIc" value="TopicsCollection" />
          </node>
        </node>
        <node concept="lc7rE" id="TwzapBy5jH" role="3cqZAp">
          <node concept="la8eA" id="TwzapBy5qI" role="lcghm">
            <property role="lacIc" value=" { " />
          </node>
        </node>
        <node concept="lc7rE" id="TwzapBy64y" role="3cqZAp">
          <node concept="l8MVK" id="TwzapBy64z" role="lcghm" />
        </node>
        <node concept="3izx1p" id="TwzapBy6XO" role="3cqZAp">
          <node concept="3clFbS" id="TwzapBy6XQ" role="3izTki">
            <node concept="lc7rE" id="TwzapBydQw" role="3cqZAp">
              <node concept="l8MVK" id="TwzapBydQx" role="lcghm" />
            </node>
            <node concept="3clFbH" id="TwzapBy83V" role="3cqZAp" />
            <node concept="lc7rE" id="TwzapBy6_p" role="3cqZAp">
              <node concept="l9S2W" id="TwzapBy6CD" role="lcghm">
                <node concept="2OqwBi" id="5EFKsOnHRQI" role="lbANJ">
                  <node concept="117lpO" id="5EFKsOnHRJj" role="2Oq$k0" />
                  <node concept="3Tsc0h" id="5EFKsOnHS46" role="2OqNvi">
                    <ref role="3TtcxE" to="vnwr:5EFKsOnHtGx" resolve="topics" />
                  </node>
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="lc7rE" id="TwzapByVGr" role="3cqZAp">
          <node concept="2BGw6n" id="TwzapByVMD" role="lcghm" />
        </node>
        <node concept="lc7rE" id="TwzapByVvM" role="3cqZAp">
          <node concept="la8eA" id="TwzapByVNP" role="lcghm">
            <property role="lacIc" value="}" />
          </node>
          <node concept="l8MVK" id="TwzapByVN2" role="lcghm" />
        </node>
        <node concept="lc7rE" id="TwzapByVUF" role="3cqZAp">
          <node concept="l8MVK" id="TwzapByW0Z" role="lcghm" />
        </node>
      </node>
    </node>
  </node>
  <node concept="WtQ9Q" id="5EFKsOnHSbh">
    <ref role="WuzLi" to="vnwr:5EFKsOnHjDU" resolve="Topic" />
    <node concept="11bSqf" id="5EFKsOnHSbi" role="11c4hB">
      <node concept="3clFbS" id="5EFKsOnHSbj" role="2VODD2">
        <node concept="1bpajm" id="TwzapByqDq" role="3cqZAp" />
        <node concept="lc7rE" id="TwzapBy5Lq" role="3cqZAp">
          <node concept="l9hG8" id="TwzapBy7fw" role="lcghm">
            <node concept="2OqwBi" id="TwzapBy7fx" role="lb14g">
              <node concept="117lpO" id="TwzapBy7fy" role="2Oq$k0" />
              <node concept="3TrcHB" id="TwzapBy7fz" role="2OqNvi">
                <ref role="3TsBF5" to="tpck:h0TrG11" resolve="name" />
              </node>
            </node>
          </node>
          <node concept="la8eA" id="TwzapByqve" role="lcghm">
            <property role="lacIc" value=" = {" />
          </node>
        </node>
        <node concept="3clFbJ" id="5EFKsOnHU6x" role="3cqZAp">
          <node concept="3clFbS" id="5EFKsOnHU6z" role="3clFbx">
            <node concept="3izx1p" id="5EFKsOnHXYB" role="3cqZAp">
              <node concept="3clFbS" id="5EFKsOnHXYC" role="3izTki">
                <node concept="lc7rE" id="5EFKsOnHXYJ" role="3cqZAp">
                  <node concept="l8MVK" id="5EFKsOnHXYK" role="lcghm" />
                </node>
                <node concept="1bpajm" id="5EFKsOnHXYR" role="3cqZAp" />
                <node concept="lc7rE" id="5EFKsOnHXYS" role="3cqZAp">
                  <node concept="la8eA" id="5EFKsOnHYf8" role="lcghm">
                    <property role="lacIc" value="short: &quot;" />
                  </node>
                  <node concept="l9hG8" id="5EFKsOnHXYT" role="lcghm">
                    <node concept="2OqwBi" id="5EFKsOnHYqU" role="lb14g">
                      <node concept="117lpO" id="5EFKsOnHYhN" role="2Oq$k0" />
                      <node concept="3TrcHB" id="5EFKsOnHYFG" role="2OqNvi">
                        <ref role="3TsBF5" to="vnwr:5EFKsOnHjDZ" resolve="short" />
                      </node>
                    </node>
                  </node>
                  <node concept="la8eA" id="5EFKsOnHYgT" role="lcghm">
                    <property role="lacIc" value="&quot;," />
                  </node>
                </node>
                <node concept="3clFbH" id="5EFKsOnHYb1" role="3cqZAp" />
                <node concept="1X3_iC" id="5EFKsOnHXYV" role="lGtFl">
                  <property role="3V$3am" value="statement" />
                  <property role="3V$3ak" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1068580123136/1068581517665" />
                  <node concept="lc7rE" id="5EFKsOnHXYW" role="8Wnug">
                    <node concept="l9S2W" id="5EFKsOnHXYX" role="lcghm">
                      <node concept="2OqwBi" id="5EFKsOnHXYY" role="lbANJ">
                        <node concept="117lpO" id="5EFKsOnHXYZ" role="2Oq$k0" />
                        <node concept="3Tsc0h" id="5EFKsOnHXZ0" role="2OqNvi">
                          <ref role="3TtcxE" to="88e6:TwzapBxe5D" resolve="body" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="1Wc70l" id="5EFKsOnI0x6" role="3clFbw">
            <node concept="3eOSWO" id="5EFKsOnHWwr" role="3uHU7w">
              <node concept="3cmrfG" id="5EFKsOnHWwx" role="3uHU7w">
                <property role="3cmrfH" value="0" />
              </node>
              <node concept="2OqwBi" id="5EFKsOnHVhJ" role="3uHU7B">
                <node concept="2OqwBi" id="5EFKsOnHUm9" role="2Oq$k0">
                  <node concept="117lpO" id="5EFKsOnHUei" role="2Oq$k0" />
                  <node concept="3TrcHB" id="5EFKsOnHUAo" role="2OqNvi">
                    <ref role="3TsBF5" to="vnwr:5EFKsOnHjDZ" resolve="short" />
                  </node>
                </node>
                <node concept="liA8E" id="5EFKsOnHVKX" role="2OqNvi">
                  <ref role="37wK5l" to="wyt6:~String.length():int" resolve="length" />
                </node>
              </node>
            </node>
            <node concept="3y3z36" id="5EFKsOnI1T5" role="3uHU7B">
              <node concept="10Nm6u" id="5EFKsOnI22e" role="3uHU7w" />
              <node concept="2OqwBi" id="5EFKsOnI0FZ" role="3uHU7B">
                <node concept="117lpO" id="5EFKsOnI0G0" role="2Oq$k0" />
                <node concept="3TrcHB" id="5EFKsOnI0G1" role="2OqNvi">
                  <ref role="3TsBF5" to="vnwr:5EFKsOnHjDZ" resolve="short" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbJ" id="5EFKsOnI3N3" role="3cqZAp">
          <node concept="3clFbS" id="5EFKsOnI3N4" role="3clFbx">
            <node concept="3izx1p" id="5EFKsOnI3N5" role="3cqZAp">
              <node concept="3clFbS" id="5EFKsOnI3N6" role="3izTki">
                <node concept="lc7rE" id="5EFKsOnI3N7" role="3cqZAp">
                  <node concept="l8MVK" id="5EFKsOnI3N8" role="lcghm" />
                </node>
                <node concept="1bpajm" id="5EFKsOnI3N9" role="3cqZAp" />
                <node concept="lc7rE" id="5EFKsOnI3Na" role="3cqZAp">
                  <node concept="la8eA" id="5EFKsOnI3Nb" role="lcghm">
                    <property role="lacIc" value="parts: {" />
                  </node>
                </node>
                <node concept="3izx1p" id="5EFKsOnIa50" role="3cqZAp">
                  <node concept="3clFbS" id="5EFKsOnIa51" role="3izTki">
                    <node concept="2Gpval" id="5EFKsOnIa52" role="3cqZAp">
                      <node concept="2GrKxI" id="5EFKsOnIa53" role="2Gsz3X">
                        <property role="TrG5h" value="partNode" />
                      </node>
                      <node concept="2OqwBi" id="5EFKsOnIa54" role="2GsD0m">
                        <node concept="117lpO" id="5EFKsOnIa55" role="2Oq$k0" />
                        <node concept="3Tsc0h" id="5EFKsOnIa56" role="2OqNvi">
                          <ref role="3TtcxE" to="vnwr:5EFKsOnHjE3" resolve="parts" />
                        </node>
                      </node>
                      <node concept="3clFbS" id="5EFKsOnIa57" role="2LFqv$">
                        <node concept="lc7rE" id="5EFKsOnIa58" role="3cqZAp">
                          <node concept="l8MVK" id="5EFKsOnIa59" role="lcghm" />
                        </node>
                        <node concept="lc7rE" id="5EFKsOnIa5h" role="3cqZAp">
                          <node concept="l9hG8" id="5EFKsOnIa5i" role="lcghm">
                            <node concept="2GrUjf" id="5EFKsOnIa5j" role="lb14g">
                              <ref role="2Gs0qQ" node="5EFKsOnIa53" resolve="partNode" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                    <node concept="1X3_iC" id="5EFKsOnIa5k" role="lGtFl">
                      <property role="3V$3am" value="statement" />
                      <property role="3V$3ak" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1068580123136/1068581517665" />
                      <node concept="lc7rE" id="5EFKsOnIa5l" role="8Wnug">
                        <node concept="l9S2W" id="5EFKsOnIa5m" role="lcghm">
                          <node concept="2OqwBi" id="5EFKsOnIa5n" role="lbANJ">
                            <node concept="117lpO" id="5EFKsOnIa5o" role="2Oq$k0" />
                            <node concept="3Tsc0h" id="5EFKsOnIa5p" role="2OqNvi">
                              <ref role="3TtcxE" to="88e6:TwzapBxe5D" resolve="body" />
                            </node>
                          </node>
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
                <node concept="lc7rE" id="5EFKsOnIa5q" role="3cqZAp">
                  <node concept="l8MVK" id="5EFKsOnIa5r" role="lcghm" />
                </node>
                <node concept="3clFbH" id="5EFKsOnIa5s" role="3cqZAp" />
                <node concept="1bpajm" id="5EFKsOnIa5t" role="3cqZAp" />
                <node concept="lc7rE" id="5EFKsOnIa5u" role="3cqZAp">
                  <node concept="la8eA" id="5EFKsOnIa5v" role="lcghm">
                    <property role="lacIc" value="}" />
                  </node>
                </node>
                <node concept="3clFbH" id="5EFKsOnI3Nh" role="3cqZAp" />
                <node concept="1X3_iC" id="5EFKsOnI3Ni" role="lGtFl">
                  <property role="3V$3am" value="statement" />
                  <property role="3V$3ak" value="f3061a53-9226-4cc5-a443-f952ceaf5816/1068580123136/1068581517665" />
                  <node concept="lc7rE" id="5EFKsOnI3Nj" role="8Wnug">
                    <node concept="l9S2W" id="5EFKsOnI3Nk" role="lcghm">
                      <node concept="2OqwBi" id="5EFKsOnI3Nl" role="lbANJ">
                        <node concept="117lpO" id="5EFKsOnI3Nm" role="2Oq$k0" />
                        <node concept="3Tsc0h" id="5EFKsOnI3Nn" role="2OqNvi">
                          <ref role="3TtcxE" to="88e6:TwzapBxe5D" resolve="body" />
                        </node>
                      </node>
                    </node>
                  </node>
                </node>
              </node>
            </node>
          </node>
          <node concept="1Wc70l" id="5EFKsOnI3No" role="3clFbw">
            <node concept="2OqwBi" id="5EFKsOnI3Nr" role="3uHU7w">
              <node concept="2OqwBi" id="5EFKsOnI3Ns" role="2Oq$k0">
                <node concept="117lpO" id="5EFKsOnI3Nt" role="2Oq$k0" />
                <node concept="3Tsc0h" id="5EFKsOnI4IU" role="2OqNvi">
                  <ref role="3TtcxE" to="vnwr:5EFKsOnHjE3" resolve="parts" />
                </node>
              </node>
              <node concept="3GX2aA" id="5EFKsOnI8yT" role="2OqNvi" />
            </node>
            <node concept="3y3z36" id="5EFKsOnI3Nw" role="3uHU7B">
              <node concept="10Nm6u" id="5EFKsOnI3Nx" role="3uHU7w" />
              <node concept="2OqwBi" id="5EFKsOnI3Ny" role="3uHU7B">
                <node concept="117lpO" id="5EFKsOnI3Nz" role="2Oq$k0" />
                <node concept="3Tsc0h" id="5EFKsOnI4mp" role="2OqNvi">
                  <ref role="3TtcxE" to="vnwr:5EFKsOnHjE3" resolve="parts" />
                </node>
              </node>
            </node>
          </node>
        </node>
        <node concept="3clFbH" id="5EFKsOnI3zu" role="3cqZAp" />
        <node concept="lc7rE" id="TwzapByuQZ" role="3cqZAp">
          <node concept="l8MVK" id="TwzapByuR0" role="lcghm" />
        </node>
        <node concept="3clFbH" id="TwzapByuPR" role="3cqZAp" />
        <node concept="1bpajm" id="TwzapByqZS" role="3cqZAp" />
        <node concept="lc7rE" id="TwzapByr6l" role="3cqZAp">
          <node concept="la8eA" id="TwzapByr9F" role="lcghm">
            <property role="lacIc" value="}" />
          </node>
        </node>
        <node concept="lc7rE" id="TwzapByMH0" role="3cqZAp">
          <node concept="l8MVK" id="TwzapByMH1" role="lcghm" />
        </node>
        <node concept="lc7rE" id="TwzapByMPi" role="3cqZAp">
          <node concept="l8MVK" id="TwzapByMPj" role="lcghm" />
        </node>
      </node>
    </node>
  </node>
</model>

